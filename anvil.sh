#!/bin/bash

#  comment in if necessary...
# kill -9 $(lsof -ti:8545) 2>/dev/null || true

echo "Starting Base mainnet fork (block 39250115)..."

anvil \
  --host 0.0.0.0 \
  --mnemonic "test test test test test test test test test test test junk" \
  --balance 1000000 \
  --auto-impersonate \
  --steps-tracing \
  --disable-code-size-limit \
  --block-base-fee-per-gas 0 \
  -vvvvv
