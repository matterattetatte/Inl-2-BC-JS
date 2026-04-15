#!/bin/bash

# Kill existing anvil on port 8545
kill -9 $(lsof -ti:8545) 2>/dev/null || true

echo "🚀 Starting Anvil - Local Ethereum"

anvil \
  --host 0.0.0.0 \
  --port 8545 \
  --chain-id 31337 \
  --mnemonic "test test test test test test test test test test test junk" \
  --balance 1000000 \
  --block-time 12 \
  --auto-impersonate \
  --steps-tracing \
  --disable-code-size-limit \
  --block-base-fee-per-gas 0

echo "✅ Anvil running at http://localhost:8545"
echo "📱 MetaMask: Chain ID 31337, RPC http://127.0.0.1:8545"