// Start here

const { writeBlockchain } = require("./blockchain-helpers");

const initBlockchain = () => {
	const blockchain = [];
	// Create a genesisBlock and add appropriate hash and previous hash property to genesisBlock
	const genesisBlock={
		hash: "0",
		previousHash: null,
	}
	blockchain.push(genesisBlock);
	// Create a blockchain constant containing genesisBlock
	// Refer writeBlockchain function from blockchain-helpers
	writeBlockchain(blockchain);
};

module.exports = { initBlockchain };
