
const {ethers } = require("hardhat");

async function main() {
  const CryptoPigs = await ethers.getContractFactory("CryptoPigs");
  const cryptoPigs = await CryptoPigs.deploy();
  await cryptoPigs.deployed();
  console.log("CryptoPigs contract deployed to:", cryptoPigs.address); 
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
