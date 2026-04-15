import { formatEther, parseEther } from './utils.js'

const RPC_URL = 'http://localhost:8545'

export async function connectProvider() {
    return new ethers.JsonRpcProvider(RPC_URL)
}

export async function getBalance(address) {
    const provider = await connectProvider()
    const balance = await provider.getBalance(address)
    return formatEther(balance)
}

export async function getBlockNumber() {
    const provider = await connectProvider()
    return await provider.getBlockNumber()
}

export async function sendTransaction(fromSigner, toAddress, amountEth) {
    const tx = await fromSigner.sendTransaction({
        to: toAddress,
        value: parseEther(amountEth)
    })
    return await tx.wait()
}

export async function getSigner() {
    if (!window.ethereum) throw new Error('MetaMask required')
    await window.ethereum.request({ method: 'eth_requestAccounts' })
    const provider = new ethers.BrowserProvider(window.ethereum)
    return await provider.getSigner()
}