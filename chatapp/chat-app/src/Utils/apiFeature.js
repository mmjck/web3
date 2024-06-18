import { ethers } from "ethers";
import Web3Modal from 'web3modal';

import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../Context/constants'

export const CheckIfWalletConnected = async () => {
    try {
        if (!window.ethereum) console.log("Install MetaMask");

        const accounts = await window.ethereum.request({
            method: "eth_accounts"
        })

        const firstAccount = accounts[0]
        return firstAccount
    } catch (error) {
        console.log("Install MetaMask");
    }
}


export const connectWallet = async () => {
    try {
        if (!window.ethereum) console.log("Install MetaMask");

        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts"
        })

        const firstAccount = accounts[0]
        return firstAccount
    } catch (error) {
        console.log("Install MetaMask");
    }
}


const fetchContract = (signerOrProvider) => {
    return new ethers.Contract(CONTRACT_ABI, CONTRACT_ADDRESS, signerOrProvider)
}

export const connectingWithContract = async () => {
    try {
        const web3modal = new Web3Modal()
        const connection = await web3modal.connect()
        const provider = new ethers.providers.Web3Modal(connection)

        const signer = provider.getSigner()
        const contract = fetchContract(signer)

        return contract
    } catch (error) {
        console.log(error);
    }
}