const express = require('express');
const db = require('./database');
const router = express.Router();

// Get all wallets for a user
router.get('/users/:userId/wallets', (req, res) => {
  const wallets = db.prepare('SELECT * FROM wallets WHERE userId = ?').all(req.params.userId);
  res.json(wallets);
});

// Add a wallet
router.post('/users/:userId/wallets', (req, res) => {
  const { address, label } = req.body;
  const userId = req.params.userId;

  const existing = db.prepare('SELECT COUNT(*) as count FROM wallets WHERE userId = ?').get(userId);
  const isPrimary = existing.count === 0 ? 1 : 0;

  const result = db.prepare(
    'INSERT INTO wallets (userId, address, label, isPrimary) VALUES (?, ?, ?, ?)'
  ).run(userId, address, label || 'My Wallet', isPrimary);

  res.status(201).json({ id: result.lastInsertRowid });
});

// Set a wallet as primary -- THIS HAS THE RACE CONDITION BUG
router.put('/users/:userId/wallets/:walletId/set-primary', async (req, res) => {
  const { userId, walletId } = req.params;

  // Step 1: Unset all primary wallets for this user
  db.prepare('UPDATE wallets SET isPrimary = 0 WHERE userId = ?').run(userId);

  // BUG: No transaction! Between step 1 and step 2, another concurrent
  // request can also complete step 1, and then both complete step 2,
  // resulting in TWO primary wallets.

  // Simulate a tiny delay that makes the race condition more likely
  await new Promise(resolve => setTimeout(resolve, 10));

  // Step 2: Set the specified wallet as primary
  db.prepare('UPDATE wallets SET isPrimary = 1 WHERE id = ? AND userId = ?').run(walletId, userId);

  res.json({ success: true });
});

// Get primary wallet
router.get('/users/:userId/wallets/primary', (req, res) => {
  const wallets = db.prepare('SELECT * FROM wallets WHERE userId = ? AND isPrimary = 1').all(req.params.userId);
  res.json(wallets);
});

module.exports = router;
