const { SHA256 } = require("crypto-js");
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

	calculateHash = (block) => {
		return SHA256(JSON.stringify(block));
	}

	// Create a hash, previousHash and transactions property for newBlock and push that into blockchain
	const newBlock = {
		index : previousBlock.index + 1,
		timestamp : Date.now(),
		previousHash : previousBlock.hash,
		hash : calculateHash(transactions),
		transactions : transactions
	}

	blockchain.push(newBlock);
	writeBlockchain(blockchain);
	writeTransactions([]);
};

module.exports = { addBlock };
