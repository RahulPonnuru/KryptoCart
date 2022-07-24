import React,{useEffect,useState} from 'react';
// import {ethers} from 'ethers';

export const TransactionContext=React.createContext();

const {ethereum}=window;

export const TransactionProvider=({children})=>{
    const [currentAccount, setCurrentAccount] = useState("");
    const checkIfWalletIsConnected=async()=>{
        try {
            if(!ethereum) return alert("Please install metamask");
            const accounts=await ethereum.request({method:'eth_accounts'});
            if(accounts.length){
                setCurrentAccount(accounts[0]);

                //getAllTransactions();
            }else{
                console.log("No accounts found");
            }
        } catch (error) {
            console.log(error);
            throw new Error("No Ethereum object.");
        }
        
    }
    const connectWallet=async()=>{
        try{
            if(!ethereum) return alert("Please install metamask");
            const accounts=await ethereum.request({method:'eth_requestAccounts'});
            setCurrentAccount(accounts[0]);
        }catch(error){
            console.log(error);
            throw new Error("No Ethereum object.");
        }
    }
    useEffect(()=>{
        checkIfWalletIsConnected();
    },[]);
    return(
        <TransactionContext.Provider value={{connectWallet,currentAccount}}>
            {children}
        </TransactionContext.Provider>
    )
}