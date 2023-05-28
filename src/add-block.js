const {
	getBlockchain,
	writeBlockchain,
	getTransactions,
	writeTransactions,
} = require("./blockchain-helpers");

const addBlock = () => {
	const blockchain = getBlockchain();
	const previousBlock = blockchain[blockchain.length - 1];
	const transactions = getTransactions();

	const newBlock = {
		//creata hash, previousHash and transactions property for newBlock
		hash: Math.random().toString(),
		previousHash: previousBlock.hash,
		transactions,
	};

	blockchain.push(newBlock);
	writeBlockchain(blockchain);
	writeTransactions([]);
};

addBlock();

module.exports = { addBlock };
