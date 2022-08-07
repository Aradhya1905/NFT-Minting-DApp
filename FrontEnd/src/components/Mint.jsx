import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import {ethers} from 'ethers';
import CryptoPigs from "../CryptoPigs.json";

const CryptoPigsAddress = "0x2BDd3893E48991D95FdBc8c27edA3a4F7e5f0e9F"

const Mint = ({wallet,setWallet}) => {
	const [minted,setMinted]=useState('')
	const [toMint,setToMint] = useState('');
	const [mintAmt,setMintAmt] = useState('');
	const [message,setMessage] = useState('');
	const [txnHash,setTxnHash] = useState('')
	const {ethereum} = window;
	const checkWalletConnected = async() => {
		if (!ethereum){
			alert("please install Metamask")
		}
		else{
			console.log('metamask exists', ethereum)
		}
		const accounts =await ethereum.request({method:'eth_requestAccounts'});
		if(accounts.length!==0){
			setWallet(accounts[0]);
		}else{
			console.log("No accounts found");
		}

	}

	const contract =()=>{
		const provider = new ethers.providers.Web3Provider(ethereum);
		const signer = provider.getSigner();
		const Contract = new ethers.Contract(CryptoPigsAddress, CryptoPigs.abi, signer);
		return Contract;
	}

	const NFTminted=async ()=>{
		const Contract = contract();
		const minted= await Contract.AmountOfNFTminted()
		setMinted(minted.toString());
		NFTtoMint();
	}
	const NFTtoMint = async ()=>{
		const Contract = contract(); 
		const toMint= await Contract.AmountOfNFTtoMint();
		setToMint(toMint.toString());
	}
	const reload =()=>{
		window.location.reload();
	}
	useEffect(()=>{
		NFTminted();
	},[])


	const Mint = async (mintAmt) => {
		checkWalletConnected();
        try {
            if (ethereum) {
                const Contract = contract();
				if (ethereum && Contract) {
					const  currentChainID = await ethereum.request({ method: 'eth_chainId'});
					const RinkeybyID = "0x4"
					if(currentChainID ===RinkeybyID){
						if(mintAmt>=1 && mintAmt<=10){
							let nftTxn = await Contract.mint(mintAmt);
							setMessage("Minting NFT's..please wait....")
							await nftTxn.wait();        
							setMintAmt('');
							setMessage(`NFTs minted...Have a look at Ur wallet@ :https://testnets.opensea.io/`);
							setTxnHash(` https://rinkeby.etherscan.io/tx/${nftTxn.hash}`)
							NFTminted()
						}
						else{
							alert("Mint amount should be between 1 - 10 nos")
						}

					}else{
						alert("Please Connect To Rinkeby Testnet")
					}					
				  }
			}
		}catch(e){
			console.log(e)
		}
    }
	
  return (
	<MintContainer>
			<h1>Please Connect to <span style={{borderBottom : '5px solid rgba(219, 229, 237, 0.878)'}}>Rinkeby TestNet</span> to Mint NFTs</h1>
			<h1>NFTs available : {toMint}</h1>
			<h1>NFTs already minted: {minted}</h1>
			<MintInput>
				<input type="number" placeholder="Mint amt 1-10" value={mintAmt} onChange={(e) => setMintAmt(e.target.value)}/>
				<button onClick={()=>Mint(mintAmt)}>Mint</button>
			</MintInput>
			<p>{message}</p>
			{ (txnHash === "") ? (null) : (<p>Transaction hash@: <a target="_blank" href={txnHash}> Rinkeby Etherscan</a></p>)}
			
	</MintContainer>
		
  )
}

export default Mint

const MintContainer = styled.div`
	h1{
		margin-bottom:2em;
	}
	p{
		margin-top:1.5em;
		font-size:1.2em;
		font-family:poppins;
		a{
			text-decoration:none;
			border-bottom:1px solid rgba(219, 229, 237, 0.878);
		}
	}
	@media only screen and (max-width: 830px)  {
		font-size: 0.5em;
	}
	@media only screen and (max-width: 420px)  {
		font-size: 0.3em;
		padding:1.5em;
		line-height: 3.5em;
	}
`
const MintInput = styled.div`
	input{
		border:none;
		width: 400px;
		height: 45px;
		border-radius: 4px;
		padding:1.5em;
		font-family:poppins;
		font-size:1em;
		background-color: #fff;
		color: black;
		&:focus{
			outline:none;
		}
		@media only screen and (max-width: 420px)  {
		width:300px;
		font-size:1em;
	}
	}

	button{
		{
		padding: 1em 2em;
		border-radius: 1em;
		cursor: pointer;
		background: linear-gradient(135deg, #6e8efb, #a777e3);
		color:#fff;
		margin-left: 1em;
		&:hover{
			opacity: 0.9;
			background:linear-gradient(135deg, #a777e3, #6e8efb);
			transition: all 0.5s ease-in-out;
		}
	}
	}
`
