import React from 'react';
import style from 'styled-components';

const Navbar = ({wallet,setWallet}) => {
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
		
  return (
	<Nav>
		<NavLogo>
			<div>
				<img src="https://i.pinimg.com/564x/10/12/3b/10123b632968e1d3d22b0839eee135f2.jpg" alt="Crypto Pigs" />
			</div>
			<a href="/">Crypto Pigs</a>
		</NavLogo>
		<NavItems>
			<a target="_blank" href="https://github.com/">GitHub</a>
			<a target="_blank" href="https://testnets.opensea.io/">OpenSea</a>
			<a target="_blank" href="https://rinkeby.etherscan.io/address/0x2bdd3893e48991d95fdbc8c27eda3a4f7e5f0e9f">Smart Contract</a>
			{ (wallet === "") ? (<button onClick={checkWalletConnected}>
			Connect</button>) : (<button onClick={checkWalletConnected}>Connected</button>)}	
		</NavItems>
	</Nav>
  )
}

export default Navbar

const Nav = style.div`
	height:60px;
	font-size:10px;
	display:flex;
	justify-content:space-between;
	border-bottom: 0.5px solid #fff;
	font-size:14px;
	color:rgb(251, 206, 177);
	@media only screen and (min-width: 768px)  {
		font-size:0.7em;
	}

`
const NavLogo = style.div`
	display:flex;
	align-items:center;
	gap:1em;
	div{
		img{
			height:45px;
			width:100%;
			margin:0;
			object-fit:contain;
			border-radius:50%;
		}
	}
	@media only screen and (min-width: 768px)  {
		display:flex;
		align-items:center;
		justify-content:space-between;
	}
	
`
const NavItems = style.div`
	display:flex;
	align-items:center;
	gap:4em;
	button {
		padding: 1em 2em;
		border-radius: 1em;
		cursor: pointer;
		background: linear-gradient(135deg, #6e8efb, #a777e3);
		color:#fff;

		&:hover{
			opacity: 0.9;
			background:linear-gradient(135deg, #a777e3, #6e8efb);
			transition: all 0.5s ease-in-out;
		}
	}
	@media only screen and (max-width: 830px)  {
		a{
		   display: none;
	   }
	 }
`

