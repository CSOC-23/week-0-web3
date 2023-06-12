// Read the docs to know about fs library https://node.readthedocs.io/en/latest/api/fs/
const { writeFileSync, readFileSync } = require("fs");

function writeBlockchain(blockchain) {
	const blockchainString = JSON.stringify(blockchain, null, 2);
	writeFileSync("./blockchain.json", blockchainString);
}

function getBlockchain() {
	const blockchainFile = readFileSync("./blockchain.json");
	const blockchain = JSON.parse(blockchainFile);
	return blockchain;
}

// Transactions go here
function writeTransactions(transactions) {
	const transactionsString = JSON.stringify(transactions, null, 2);
	writeFileSync("./transactions.json", transactionsString);
}

function getTransactions() {
	const transactionsFile = readFileSync("./transactions.json");
	const transactions = JSON.parse(transactionsFile);
	return transactions;
}

module.exports = {
	writeBlockchain,
	getBlockchain,
	getTransactions,
	writeTransactions,
};
