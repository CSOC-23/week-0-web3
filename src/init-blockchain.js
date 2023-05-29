//start here

const { writeBlockchain } = require("./blockchain-helpers");

const initBlockchain = () => {
	//create a genesisBlock and add appropriate hash and previous hash property to genesisBlock


	//create a blockchain constant containing genesisBlock
	//refer writeBlockchain function from blockchain-helpers
	writeBlockchain(blockchain);
};

module.exports = { initBlockchain };
