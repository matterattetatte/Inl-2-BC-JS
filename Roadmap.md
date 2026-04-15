# 🚀 Ethereum Block Explorer Checklist

## 🛠️ Environment Setup
- [ ] 📁 Create `index.html`, `style.css`, `src/`
- [ ] 🔗 Add ethers.js CDN in HTML
- [ ] ⚙️ Install Foundry and start Anvil local blockchain
- [ ] 🧳 Configure MetaMask for Anvil network (local RPC endpoint, chain ID 31337)
- [ ] 📂 Create JS structure: `src/blockchain.js`, `src/ui.js`, `src/utils.js`

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
- [ ] 📍 Address input field with fetch balance button
- [ ] 💰 Display current Ether balance for entered address
- [ ] 🧱 Show current blockchain block number/height
- [ ] 📤 Transaction form with to-address and ETH amount inputs
- [ ] 🚀 Send transaction button that broadcasts to blockchain
- [ ] 🔗 MetaMask wallet connection integration

## 🧪 Testing & Debugging
- [ ] 🧑‍💻 Test with Anvil's 10 pre-funded test accounts
- [ ] 🔍 Verify balance, block number, transactions work
- [ ] 📋 Check Anvil console for transaction confirmations
- [ ] 🚨 Test invalid addresses and error cases
- [ ] 🛠️ Use browser DevTools for network debugging

## 📤 Submission Preparation
- [ ] ✅ Works in browser without local server (GitHub Pages ready)
- [ ] 📖 README.md with Anvil setup, MetaMask config, test instructions
- [ ] 📸 Screenshots of balance display and successful transaction
- [ ] 🔗 Live demo link from GitHub Pages
