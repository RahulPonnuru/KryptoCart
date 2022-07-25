import React,{useContext} from 'react';
import img1 from '../../images/ethereum-eth-logo.svg';
import img2 from '../../images/icons8-info.svg';
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";

const Welcome=()=>{
    const {
        currentAccount,
        connectWallet,
      } = useContext(TransactionContext);
    return(
        <div className="welcome">
            <div className="leftSection">
                <h1 className="heading">Buy the products with <br/> less price and from <br/> actual seller </h1>
                <p className="content">Customers will be provided with digital NFT warrenty card which will help <br/>to verify the authenticity of their product, prove their ownership of their<br/> product, and transfer ownership of them upon resale</p>
                {!currentAccount &&<button onClick={connectWallet} type="button" className="btn-grad">Connect your Wallet</button>}
            </div>
            <div className="card">
                <img src={img1} alt="Ethereum" className='eth'></img>
                <img src={img2} alt="Info" className='info'></img>
                <p className="address">{shortenAddress(currentAccount)}</p>
                <p className="ethereum">Ethereum</p>
            </div>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default Welcome;