const { writeTransactions, getTransactions } = require("./blockchain-helpers");

const addTransaction = () => {
	const fromAddress = process.argv[2];
	const toAddress = process.argv[3];
	const amount = parseInt(process.argv[4]);

	const newTransaction = {
		fromAddress,
		toAddress,
		amount,
	};

	const transactions = getTransactions();
	transactions.push(newTransaction);
	writeTransactions(transactions);
};

module.exports = { addTransaction };
