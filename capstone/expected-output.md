# Expected Capstone Output

## What the App Should Look Like

### Header
- App name "CryptoTrack"
- Connected wallet address (truncated: 0x1234...5678)
- Disconnect button
- Network indicator (Ethereum Mainnet)

### Portfolio Summary Cards
```
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│  Total Value     │ │  24h Change     │ │  Tokens Held    │
│  $12,345.67      │ │  +$234.56 (2.1%)│ │  8              │
│                  │ │  ▲ Green        │ │                  │
└─────────────────┘ └─────────────────┘ └─────────────────┘
```

### Token Holdings Grid
```
┌──────────────────────────────────────────────────┐
│ 🪙 ETH          2.5 ETH      $4,567.89  +3.2%  │
│ 🪙 USDC         1,500 USDC   $1,500.00  +0.01% │
│ 🪙 LINK         100 LINK     $1,234.56  -1.5%  │
│ 🪙 UNI          50 UNI       $567.89    +5.7%  │
└──────────────────────────────────────────────────┘
```

### Pie Chart
- Portfolio distribution by value
- Interactive: hover shows token name and percentage
- Colors: each token gets a distinct color

### Transaction History
- Recent transactions in a table
- Columns: Date, Type (Send/Receive), Token, Amount, Hash (linked)
- Paginated or "Load more"

## Technical Expectations

### File Structure
```
cryptotrack/
├── src/
│   ├── components/
│   │   ├── ConnectWallet.tsx
│   │   ├── PortfolioSummary.tsx
│   │   ├── TokenCard.tsx
│   │   ├── TokenGrid.tsx
│   │   ├── PieChart.tsx
│   │   ├── TransactionHistory.tsx
│   │   └── Layout.tsx
│   ├── hooks/
│   │   ├── useTokenBalances.ts
│   │   ├── useTokenPrices.ts
│   │   └── useTransactions.ts
│   ├── lib/
│   │   ├── wagmi.ts
│   │   └── coingecko.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
└── README.md
```

### Quality Checks
- `npm run build` succeeds
- `npx tsc --noEmit` passes (no type errors)
- All components handle loading and error states
- Responsive on mobile (375px width)
- Dark mode by default
