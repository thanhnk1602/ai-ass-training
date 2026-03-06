#!/usr/bin/env node

// Stop/Notification hook: Send summary to Slack (or console) when agent completes
// In production, replace console.log with actual Slack webhook POST

const fs = require('fs');
const input = JSON.parse(fs.readFileSync('/dev/stdin', 'utf8'));

const summary = {
  event: input.hook_type || 'Stop',
  session_id: input.session_id || 'unknown',
  timestamp: new Date().toISOString(),
  message: 'Claude Code session completed',
  stop_reason: input.stop_reason || 'task_complete',
};

// In production, POST to Slack webhook:
// const SLACK_WEBHOOK = process.env.SLACK_WEBHOOK_URL;
// fetch(SLACK_WEBHOOK, {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     text: `🤖 AI Session Complete\n${JSON.stringify(summary, null, 2)}`
//   })
// });

// For demo purposes, log to stderr (visible in terminal)
console.error(`\n🔔 Notification Hook Fired:`);
console.error(`   Event: ${summary.event}`);
console.error(`   Time: ${summary.timestamp}`);
console.error(`   Reason: ${summary.stop_reason}`);
console.error(`   → In production, this sends to Slack/Teams/PagerDuty\n`);
