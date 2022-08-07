import React from 'react'
import styled from 'styled-components'
import K20 from '../assets/CryptoMonkey/20K+.svg'
import k36 from '../assets/CryptoMonkey/36K+.svg'
import k58 from '../assets/CryptoMonkey/58K+.svg'
import artists from '../assets/CryptoMonkey/Artists.svg'
import artwork from '../assets/CryptoMonkey/Artworks.svg'
import auction from '../assets/CryptoMonkey/Auctions.svg'
import Rectangle from '../assets/CryptoMonkey/Rectangle 5913-1.svg'
import Rectangle1 from '../assets/CryptoMonkey/Rectangle 5913-2.svg'
import Rectangle2 from '../assets/CryptoMonkey/Rectangle 5913.svg'


const MainContanerData = () => {
  return (
	<>
	<ContainerLeftCard>
		<img className = "Rectangle" src={Rectangle} alt="" />
		<img src={K20} alt="20k" />
		<img src={artists} alt="artists" />				
	</ContainerLeftCard>
	<ContainerLeftCard>
		<img className = "Rectangle" src={Rectangle1} alt="" />
		<img src={k36} alt="30k" />
		<img src={artwork} alt="artwork" />				
	</ContainerLeftCard>
	<ContainerLeftCard>
		<img className = "Rectangle" src={Rectangle2} alt="" />
		<img src={k58} alt="20k" />
		<img src={auction} alt="auction" />				
	</ContainerLeftCard>
	</>
  )
}

export default MainContanerData

const ContainerLeftCard = styled.div`
	margin-top: 3em;
	display:flex;
	align-items:center;
	gap:10px;

	@media only screen and (max-width: 430px) {
		width:50px;
		display:flex;
		flex-direction:column;
		img{
			width:100%;
			object-fit:cover;
		}
		.Rectangle{
			display:none;
		}
	}
`
