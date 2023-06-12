const {
	getBlockchain,
	writeBlockchain,
	getTransactions,
	writeTransactions,
} = require("./blockchain-helpers");
const crypto = require("crypto-js");
const addBlock = () => {
	const blockchain = getBlockchain();
	const previousBlock = blockchain[blockchain.length - 1];
	const transactions = getTransactions();
    const newBlock = {
		hash: generateHash(previousBlock.hash, transactions),
		previousHash: previousBlock.hash,
		transactions: transactions,
	  };
	// Create a hash, previousHash and transactions property for newBlock and push that into blockchain

	blockchain.push(newBlock);
	writeBlockchain(blockchain);
	writeTransactions([]);
};
const generateHash = (previousHash, transactions) => {
	const data = previousHash + JSON.stringify(transactions);
	const hash = crypto.SHA256(data).toString();
	return hash;
  };
module.exports = { addBlock };
