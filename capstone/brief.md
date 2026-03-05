# Client Brief: CryptoTrack Portfolio Dashboard

## What We Need
A cryptocurrency portfolio tracking dashboard where users can:
- Connect their Ethereum wallet (MetaMask)
- Automatically detect and display all ERC-20 token holdings
- Show portfolio value in USD (using CoinGecko free API)
- Display a portfolio distribution pie chart
- Show 24h price changes with green/red indicators
- Transaction history pulled from Etherscan API (or mock)
- Responsive design (mobile-first)
- Dark mode default

## Technical Requirements
- React 18+ with TypeScript (strict mode)
- Vite for build tooling
- Tailwind CSS for styling
- wagmi v2 + viem for wallet connection
- Recharts for the pie chart
- TanStack React Query for data fetching
- No backend needed (fully client-side)
- Deploy-ready (works with `npm run build`)

## Design Requirements
- Clean, modern dark UI (think: Zerion, Zapper)
- Card-based layout for token holdings
- Each token card shows: icon, name, symbol, balance, USD value, 24h change %
- Portfolio summary at top: total value, 24h change, number of tokens
- Sidebar or header with wallet address (truncated) and disconnect button

## Data Sources
- Token balances: read from connected wallet via wagmi/viem
- Token prices: CoinGecko free API (`/api/v3/simple/token_prices/ethereum`)
- Token metadata: on-chain or CoinGecko
- Transaction history: Etherscan API (free tier) or mock data

## Deliverables
- Working application (`npm run dev` starts it)
- Clean project structure
- README with setup instructions
- No TypeScript errors (`npx tsc --noEmit` passes)
- Production build works (`npm run build` succeeds)
