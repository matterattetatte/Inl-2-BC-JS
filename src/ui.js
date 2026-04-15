import { getBalance, getBlockNumber, getSigner, sendTransaction } from './blockchain.js';
import { isValidAddress, showError, showSuccess } from './utils.js';

let signer = null;

async function updateStatus() {
    const statusEl = document.getElementById('status');
    try {
        signer = await getSigner();
        statusEl.textContent = `Connected: ${await signer.getAddress().then(a => a.slice(0,10) + '...')}`;
        statusEl.className = 'status connected';
        document.getElementById('sendTx').disabled = false;
    } catch (e) {
        statusEl.textContent = 'Disconnected';
        statusEl.className = 'status disconnected';
    }
}

document.getElementById('getBalance').addEventListener('click', async () => {
    const addr = document.getElementById('address').value.trim();
    if (!isValidAddress(addr)) {
        showError('balance', 'Invalid address');
        return;
    }
    
    try {
        document.getElementById('getBalance').disabled = true;
        const bal = await getBalance(addr);
        showSuccess('balance', `Balance: ${bal} ETH`);
    } catch (e) {
        showError('balance', e.message);
    } finally {
        document.getElementById('getBalance').disabled = false;
    }
});


document.getElementById('sendTx').addEventListener('click', async () => {
    const toAddr = document.getElementById('toAddr').value.trim();
    const amount = document.getElementById('amount').value;
    
    if (!isValidAddress(toAddr)) {
        showError('txHash', 'Invalid to address');
        return;
    }
    if (!amount || amount <= 0) {
        showError('txHash', 'Invalid amount');
        return;
    }
    
    try {
        document.getElementById('sendTx').disabled = true;
        const txReceipt = await sendTransaction(signer, toAddr, amount);
        showSuccess('txHash', `Tx: ${txReceipt.hash}`);
    } catch (e) {
        showError('txHash', e.message);
    } finally {
        document.getElementById('sendTx').disabled = false;
    }
});


setInterval(async () => {
    try {
        const block = await getBlockNumber();
        document.getElementById('blockNum').textContent = `Block #${block} ⏱️`;
        document.getElementById('blockNum').className = 'result success';
        document.getElementById('blockNum').style.display = 'block';
    } catch (e) {}
}, 2000);

window.addEventListener('load', updateStatus);
window.ethereum?.on('accountsChanged', updateStatus);