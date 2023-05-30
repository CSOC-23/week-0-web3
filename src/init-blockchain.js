// Start here

const { writeBlockchain } = require("./blockchain-helpers");

const initBlockchain = () => {
	// Create a genesisBlock and add appropriate hash and previous hash property to genesisBlock

	// Create a blockchain constant containing genesisBlock
	// Refer writeBlockchain function from blockchain-helpers
	writeBlockchain(blockchain);
};

module.exports = { initBlockchain };
