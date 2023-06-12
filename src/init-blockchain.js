// Start here

const { constants } = require("fs/promises");
const { writeBlockchain } = require("./blockchain-helpers");

const initBlockchain = () => {
	 const genesisBlock={
		hash:'0',
		previousHash:null,
		transactions:null
	 }
	// Create a genesisBlock and add appropriate hash and previous hash property to genesisBlock
      const blockchain=[genesisBlock]
	// Create a blockchain constant containing genesisBlock
	// Refer writeBlockchain function from blockchain-helpers
	writeBlockchain(blockchain);
};

module.exports = { initBlockchain };
