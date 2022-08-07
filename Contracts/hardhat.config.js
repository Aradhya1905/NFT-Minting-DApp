require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
/** @type import('hardhat/config').HardhatUserConfig */

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL;
const POLYGON_RPC_URL = process.env.POLYGON_RPC_URL;
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const API_KEY = process.env.ETHERSCAN_API_KEY;
module.exports = {
	defaultNetwork: "hardhat",

	networks: {
	  hardhat: {},
	  rinkeby: {
		url: RINKEBY_RPC_URL,
		accounts: [PRIVATE_KEY],
	  },
	  Polygon: {
		url: POLYGON_RPC_URL,
		accounts: [PRIVATE_KEY],
	  },
	  Goerli: {
		url: GOERLI_RPC_URL,
		accounts: [PRIVATE_KEY],
	  }
	},
	etherscan: {
		apiKey: API_KEY,
	},
	solidity: "0.8.9",
	
};
