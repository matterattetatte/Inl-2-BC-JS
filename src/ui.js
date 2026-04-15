import { getBalance, getBlockNumber, getSigner, sendTransaction } from './blockchain.js'
import { isValidAddress, showError, showSuccess } from './utils.js'

let signer = null

async function setUIConnected() {
    const connectBtn = document.getElementById('connectBtn')
    const disconnectBtn = document.getElementById('disconnectBtn')
    const sendTxBtn = document.getElementById('sendTx')
    
    connectBtn.disabled = signer
    disconnectBtn.disabled = !signer
    sendTxBtn.disabled = !signer
}

async function updateStatus() {
    try {
        signer = await getSigner()
    } catch  {
    } finally {
        setUIConnected()
    }
}

async function updateBlock() {
    try {
        const block = await getBlockNumber()
        const blockEl = document.getElementById('blockNum')
        blockEl.textContent = `Block #${block} ⏱️`
        blockEl.className = 'result success'
        blockEl.style.display = 'block'
    } catch (e) {
        console.error(e)
    }
}

document.getElementById('connectBtn').addEventListener('click', async () => {
    document.getElementById('connectBtn').disabled = true
    try {
        await updateStatus()
    } catch (e) {
        showError('status', 'Connection failed: ' + e.message)
        document.getElementById('connectBtn').disabled = false
    }
})

document.getElementById('disconnectBtn').addEventListener('click', () => {
    signer = null
    setUIConnected()
})

document.getElementById('getBalance').addEventListener('click', async () => {
    const addr = document.getElementById('address').value.trim()
    if (!isValidAddress(addr)) {
        showError('balance', 'Invalid address')
        return
    }
    
    try {
        document.getElementById('getBalance').disabled = true
        const bal = await getBalance(addr)
        showSuccess('balance', `Balance: ${bal} ETH`)
    } catch (e) {
        showError('balance', e.message)
    } finally {
        document.getElementById('getBalance').disabled = false
    }
})

document.getElementById('sendTx').addEventListener('click', async () => {
    const toAddr = document.getElementById('toAddr').value.trim()
    const amount = parseFloat(document.getElementById('amount').value)
    
    if (!isValidAddress(toAddr)) {
        showError('txHash', 'Invalid to address')
        return
    }
    if (!amount || amount <= 0) {
        showError('txHash', 'Invalid amount')
        return
    }
    
    try {
        document.getElementById('sendTx').disabled = true
        const txReceipt = await sendTransaction(signer, toAddr, amount.toString())
        showSuccess('txHash', `Tx: ${txReceipt.hash}`)
    } catch (e) {
        showError('txHash', e.message)
    } finally {
        document.getElementById('sendTx').disabled = false
    }
})

window.addEventListener('load', () => {
    updateBlock()
    setInterval(updateBlock, 12_000)
    setUIConnected()
})

window.ethereum?.on('accountsChanged', () => {
    updateStatus()
})

window.ethereum?.on('disconnect', () => {
    setUIConnected()
})