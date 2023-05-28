const { addTransaction } = require("../src/add-transaction");
const fs = require("fs");

test(`testing add-transaction`, () => {
	process.argv = ["node", "file_name", "123", "456", 789];
	addTransaction();
	const transactions = JSON.parse(fs.readFileSync("./transactions.json"));
	const addedTransaction = transactions[transactions.length - 1];

	expect(addedTransaction.fromAddress).toBe("123");
	expect(addedTransaction.toAddress).toBe("456");
	expect(addedTransaction.amount).toBe(789);
});
