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
		previousHash : previousBlock.hash,
		hash : previousBlock.hash+1000,
		transactions : [{
			fromAddress: "123",
			toAddress: "456",
			amount: 789,
		}],
	};

	blockchain.push(newBlock);
	writeBlockchain(blockchain);
	writeTransactions([]);
};

module.exports = { addBlock };