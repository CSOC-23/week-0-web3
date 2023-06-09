// Start here
const { writeBlockchain } = require("./blockchain-helpers");

const initBlockchain = () => {

	// Create a genesisBlock and add appropriate hash and previous hash property to genesisBlock
	const genesisBlock = {
		previousHash: null,
		hash: "0"
	};

	// Create a blockchain constant containing genesisBlock
	const blockchain = [genesisBlock];

	// Refer writeBlockchain function from blockchain-helpers
	writeBlockchain(blockchain);

};

module.exports = { initBlockchain };