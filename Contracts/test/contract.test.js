const {expect} = require('chai');
const {ethers} = require('hardhat');

describe("CryptoPigs", () => { 
	let CryptoPigs;
	let cryptoPigs;
	
	beforeEach(async() => {
		CryptoPigs = await ethers.getContractFactory("CryptoPigs");
		cryptoPigs = await CryptoPigs.deploy();
	})
	//test for not exceeding maxMintAmount;
	it("should mint only maximum of 10 token per msg.sender and revert", async() => {
		await expect(cryptoPigs.mint(11)).to.be.revertedWith('cannot exceed maxMintAmount');
	})
	//test for No of NFTs minted.
	it("should mint the amount of tokens equal to 10", async() => {
		await cryptoPigs.mint(10);
		const amountNFT = await cryptoPigs.AmountOfNFTminted();
		expect(amountNFT).to.equal(10);
	})
	//test for remaining tokens after minting.
	it("should mint the amount of tokens remaining", async() => {
		await cryptoPigs.mint(10);
		const amountNFT = await cryptoPigs.AmountOfNFTtoMint();
		expect(amountNFT).to.equal(490);
	});
	//test for initial maxSupply
	it("should start with max NFT of 500", async() => {
		const maxNFT = await cryptoPigs.maxNFT();
		expect(maxNFT).to.equal(500);
	})
	//test for initial minted NFTs.
	it("should return amount of NFT minted to 0", async() => {
		const amountNFT = await cryptoPigs.AmountOfNFTminted();
		expect(amountNFT).to.equal(0);
	})
	it("should return amount of NFT to be minted to 500", async() => {
		const amountNFT = await cryptoPigs.AmountOfNFTtoMint();
		expect(amountNFT).to.equal(500);
	})
	//test for symbol.
	it("should return symbol as PPGs", async() => {
		const symbol = await cryptoPigs.symbol();
		expect(symbol).to.equal('PPGs');
	})


	
 })
