# 🧱 Anvil Block Explorer

A lightweight, browser-based Ethereum block explorer and wallet interface specifically designed for local development with **Foundry Anvil**. This project allows users to check balances, monitor block height in real-time, and send transactions via MetaMask.

## 🚀 Features

  * **Real-time Monitoring:** Automatically fetches and displays the current block height every 2 seconds.
  * **Balance Checker:** Query the ETH balance of any valid Ethereum address on the local network.
  * **Transaction Portal:** Send ETH between accounts using a connected MetaMask wallet.
  * **Anvil Integration:** Pre-configured to work with the standard Anvil development environment.
  * **Responsive Design:** Clean, modern UI that works on desktop and mobile browsers.

-----

## 🛠️ Tech Stack

  * **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES Modules).
  * **Blockchain Library:** [ethers.js v6](https://docs.ethers.org/v6/).
  * **Local Blockchain:** [Foundry Anvil](https://www.google.com/search?q=https://book.getfoundry.sh/anvil/).
  * **Wallet:** MetaMask/Brave.

-----

## 📋 Prerequisites

1.  **Anvil:** You must have Anvil installed.
      * *Installation:* `curl -L https://foundry.paradigm.xyz | bash` followed by `foundryup`.
2.  **MetaMask Browser Extension or Brave Wallet:** Installed in your browser.

-----

## 🚦 Getting Started

### 1\. Start the Local Blockchain

Run the provided shell script to initialize Anvil with specific parameters (including 2-second block times to simulate a real network).

```bash
chmod +x anvil.sh
./anvil.sh
```

**What this script does:**

  * Starts Anvil on `http://localhost:8545`.
  * Sets the Chain ID to `31337`.
  * Provides 10 test accounts with 1,000,000 ETH each.
  * Sets a deterministic mnemonic for consistent testing.

### 2\. Configure MetaMask

To interact with the explorer, add the Anvil network to MetaMask:

  * **Network Name:** Anvil Local
  * **RPC URL:** `http://127.0.0.1:8545`
  * **Chain ID:** `31337`
  * **Currency Symbol:** `ETH`

**Import an Account:** Copy one of the Private Keys printed in your terminal by Anvil and import it into MetaMask to have "test funds" to send.

### 3\. Launch the Explorer

  * **Using VS Code:** Right-click `index.html` and select **"Open with Live Server"**.
  * **Using Python:** Run `python3 -m http.server 8000` in the root directory.

-----

## 📂 Project Structure

```text
├── index.html          # Main UI structure
├── styles.css          # Glassmorphism UI styling
├── anvil.sh            # Automation script for the local node
├── src/
│   ├── blockchain.js   # Ethers.js logic (Providers, Signers, Tx)
│   ├── ui.js           # DOM manipulation and event listeners
│   └── utils.js        # Formatting and validation helpers
└── Roadmap.md          # Development progress and checklist
```

-----

## 🧪 How to Test

1.  **Connect:** Click the **Connect** button to link your MetaMask. Ensure you are on the "Anvil Local" network.
2.  **Check Balance:** Copy an address from the Anvil terminal output and paste it into the **Balance Check** field.
3.  **Send ETH:** \* Enter a recipient address (e.g., one of the other Anvil test accounts).
      * Enter an amount (e.g., `0.5`).
      * Click **Send ETH** and confirm the popup in MetaMask.
4.  **Observe:** Watch the **Block Height** increment every few seconds and the transaction hash appear upon success.
