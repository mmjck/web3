import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;


export const TransactionsProvider = ({ children }) => {

    const [formData, setformData] = useState({ addressTo: "", amount: "", keyword: "", message: "" });
    const [currentAccount, setCurrentAccount] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));
    const [transactions, setTransactions] = useState([]);


    const connectWallet = async () => {

    }

    const handleChange = async () => {
        
    }

    const sendTransaction = async () => {
        
    }

    return (
        <TransactionContext.Provider
          value={{
            transactionCount,
            connectWallet,
            transactions,
            currentAccount,
            isLoading,
            sendTransaction,
            handleChange,
            formData,
          }}
        >
          {children}
        </TransactionContext.Provider>
      );

}