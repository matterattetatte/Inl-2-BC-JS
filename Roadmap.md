# 🚀 Anvil Block Explorer Checklist

## 🛠️ Environment Setup
- [x] 📁 Create `index.html`, `style.css`, `src/`
- [x] 🔗 Add ethers.js CDN in HTML
- [x] ⚙️ Install and start Anvil local blockchain
- [x] 🧳 Configure MetaMask for Anvil network (local RPC endpoint, chain ID 31337)
- [x] 📂 Create JS structure: `src/blockchain.js`, `src/ui.js`, `src/utils.js`

## 📁 File Structure
```
project/
├── index.html
├── style.css  
├── src/
│   ├── blockchain.js
│   ├── ui.js
│   └── utils.js
└── README.md
└── Roadmap.md
```

## ✅ Core Features (Godkänt/Pass)
- [x] 📍 Address input field with fetch balance button
- [x] 💰 Display current Ether balance for entered address
- [x] 🧱 Show current blockchain block number/height
- [x] 📤 Transaction form with to-address and ETH amount inputs
- [x] 🚀 Send transaction button that broadcasts to blockchain
- [x] 🔗 MetaMask wallet connection integration

## 🧪 Testing & Debugging
- [x] 🧑‍💻 Test with Anvil's 10 pre-funded test accounts
- [x] 🔍 Verify balance, block number, transactions work
- [x] 📋 Check Anvil console for transaction confirmations
- [x] 🚨 Test invalid addresses and error cases
- [x] 🛠️ Use browser DevTools for network debugging

## 📤 Submission Preparation
- [ ] ✅ Works in browser without local server (GitHub Pages ready). Host anvil on some cloud provider.
- [x] 📖 README.md with Anvil setup, MetaMask config, test instructions
- [ ] 📸 Screenshots of balance display and successful transaction
- [ ] 🔗 Live demo link from GitHub Pages
