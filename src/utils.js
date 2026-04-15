import * as ethers from 'https://cdn.jsdelivr.net/npm/ethers@6.13.2/+esm';

export function formatEther(wei) {
    return ethers.formatEther(wei)
}

export function parseEther(eth) {
    return ethers.parseEther(eth.toString())
}

export function isValidAddress(address) {
    return ethers.isAddress(address)
}

export function showError(elementId, message) {
    const el = document.getElementById(elementId)
    el.textContent = `❌ ${message}`
    el.className = 'result error'
    el.style.display = 'block'
}

export function showSuccess(elementId, message) {
    const el = document.getElementById(elementId)
    el.textContent = `✅ ${message}`
    el.className = 'result success'
    el.style.display = 'block'
}
