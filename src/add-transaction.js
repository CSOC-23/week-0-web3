const { writeTransactions, getTransactions } = require("./blockchain-helpers");

const addTransaction = () => {
	const fromAddress = process.argv[2];
	const toAddress = process.argv[3];
	const amount = parseInt(process.argv[4]);

	// Xreate new transactions and push them into transactions.json containing the above properties
	// Refer blockchain-helpers.js for writeTransactions and getTransactions

	const transactions = getTransactions();
	transactions.push({
		fromAddress,
		toAddress,
		amount,
	});
	writeTransactions(transactions);
};

module.exports = { addTransaction };
