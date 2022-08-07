import React from 'react';
import style from 'styled-components';
import Background from './Background'
import {useRef} from "react";
import ContainerLeftCard from './LeftContanerData'
import Mint from './Mint';

const Main = ({wallet,contract,setContract,setWallet}) => {
	const mint = useRef(null);
	const scrollToMintSection = (elementRef) =>{
		window.scrollTo({
			top:elementRef.current.offsetTop,
			behavior: 'smooth',
		})
	}
  return (
		<>
		<MainContainer>
			<ContainerLeft>
				<h1>
					Mint NFT<span>s</span> that are Outta this world.
				</h1>
				<h5>
					Discover , sell and Collect Rare NFTs.
				</h5>
			<button onClick={()=>scrollToMintSection(mint)}> Start mint </button>
			<ContainerLeftData>
				<ContainerLeftCard/>
			</ContainerLeftData>
			</ContainerLeft>
			<Background />
		</MainContainer>
		<MintContainer ref={mint} >
			<Mint  wallet={wallet} contract={contract} setWallet={setWallet} setContract={setContract}/>
			
		</MintContainer>
		</>
	)
}

export default Main

const MainContainer = style.div`
	display: flex;
	height:100vh;
	overflow:hidden;
	@media only screen and (max-width: 830px)  {
		display: flex;
		flex-direction: column;
		font-size: 0.5em;
	 }
`
const ContainerLeft = style.div`
	display: flex;
	flex-direction: column;
	flex:0.8;
	font-size:1.5em;
	line-height:3.5em;
	text-transform:uppercase;
	margin-top: 8em;
	h1{
		margin-bottom: 20px;
		span{
			text-transform:lowercase;
		}
	}
	button{
		width:150px;
		font-size:0.7em;
		padding:10px;
		background: linear-gradient(135deg, #6e8efb, #a777e3);
		color:black;
		border-radius:5px;
		cursor:pointer;
		&:hover{
			opacity: 0.9;
			background:linear-gradient(135deg, #a777e3, #6e8efb);
			transition: all 0.5s ease-in-out;
		}
	}
	
`


const ContainerLeftData = style.div`
	margin-top:1.5em;
	display:flex;
	align-items:center;
	gap:50px;
	
`

const MintContainer = style.div`
	height:95vh;
`

