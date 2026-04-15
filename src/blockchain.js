import * as ethers from 'https://cdn.jsdelivr.net/npm/ethers@6.13.2/+esm'
import { formatEther, parseEther } from './utils.js'

const RPC = window.location.hostname === 'localhost' ? 'http://localhost:8545' : 'https://0xrpc.io/sep'

let cachedProvider = null

export async function getProvider() {
    if (cachedProvider) return cachedProvider
    
    cachedProvider = new ethers.JsonRpcProvider(RPC)
    return cachedProvider
}

export async function getSigner() {
    const provider = await getProvider()

    if (!window.ethereum) throw new Error('Install MetaMask')
    
    await window.ethereum.request({ method: 'eth_requestAccounts' })
    
    const metamaskProvider = new ethers.BrowserProvider(window.ethereum)
    const signer = await metamaskProvider.getSigner()
    
    const network = await provider.getNetwork()
    console.log('Connected to Anvil:', network.chainId === 31337n)
    
    return signer
}

export async function getBalance(address) {
    const provider = await getProvider()
    const balance = await provider.getBalance(address)
    return formatEther(balance)
}

export async function getBlockNumber() {
    const provider = await getProvider()
    return await provider.getBlockNumber()
}

export async function sendTransaction(signer, toAddress, amountEth) {
    if (!signer) throw new Error('Signer required')
    const tx = await signer.sendTransaction({
        to: toAddress,
        value: parseEther(amountEth),
        gasLimit: 21000,
    })
    return await tx.wait()
}