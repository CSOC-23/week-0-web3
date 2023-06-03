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

	// Create a hash, previousHash and transactions property for newBlock and push that into blockchain
	const newBlock={
		hash: undefined,
		previousHash: previousBlock.hash,
		transactions,
	}
	blockchain.push(newBlock);
	writeBlockchain(blockchain);
	writeTransactions(transactions);
};

module.exports = { addBlock };
