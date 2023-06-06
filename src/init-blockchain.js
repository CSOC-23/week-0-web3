// Start here

const { SHA256 } = require("crypto-js");
const { writeBlockchain } = require("./blockchain-helpers");

const initBlockchain = () => {
	// Create a genesisBlock and add appropriate hash and previous hash property to genesisBlock
	 const genesisBlock = {
		index: 0,
		timestamp: Date.now(),
		hash: "0",
		previousHash: null,
		transactions: []
		}
	
	// Create a blockchain constant containing genesisBlock
	const blockchain = [genesisBlock];
	// Refer writeBlockchain function from blockchain-helpers
	writeBlockchain(blockchain);
};

module.exports = { initBlockchain };
