# NFT-Minting-DApp
NFT minting Website with smart contract.

Demo of the website : https://cryptopig.netlify.app/

ScreenShots   #CryptoPigs Minting Website.

![](https://github.com/Aradhya1905/NFT-Minting-DApp/blob/main/FrontEnd/src/assets/CryptoMonkey/screenshot.png)

![](https://github.com/Aradhya1905/NFT-Minting-DApp/blob/main/FrontEnd/src/assets/CryptoMonkey/screenshot2.png)

## Installation

If you are cloning the project then run this first

```sh
git clone https://github.com/Aradhya1905/NFT-Minting-DApp.git
```
Make sure you have node.js ,then run "npm install" in Frontend Folder

```sh
npm install
```

## Usage

For Dev server run command

```sh
npm run dev
```
For Production run , ** this website was built for learning purpose ,please write more tests in order to test smart contract **

```sh
npm run build
```

In order to run tests on smart contract run "npm install" in Contracts folder to install Hardhat ,then run 

```sh
npx hardhat test
```
In order to run smart contract on different test network create a '.env' file to store the environment variables ,

Get the RPC url from node providers like Alchemy / Infura and Private key can be obtained from metamask wallet.
Please make sure to include RPC url and Private key in Hardhat config file.

If smart contract is deployed to different test network other than Rinkeby make sure to change the ChainID in "Mint.jsx" file and include the new contract ABI in the Frontend --src folder


