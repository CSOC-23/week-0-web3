//read the docs to know about fs library https://node.readthedocs.io/en/latest/api/fs/
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

function isValidChain() {
	//check if the blockchain is valid or not
	const blockchain = getBlockchain();

	for (let i = 1; i < blockchain.length; i++) {
		const previousBlock = blockchain[i - 1];
		const { previousHash } = blockchain[i];

		if (previousHash !== previousBlock.hash) {
			return false;
		}
	}

	return true;
}

//transaction go here
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
	isValidChain,
};
