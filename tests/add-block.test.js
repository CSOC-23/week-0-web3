const { addBlock } = require("../src/add-block");
const { initBlockchain } = require("../src/init-blockchain");
const { addTransaction } = require("../src/add-transaction");

const fs = require("fs");

test(`successfuly added a block`, () => {
	// Setup the blockchain
	initBlockchain();
	process.argv = ["node", "file_name", "123", "456", 789];
	addTransaction();

	// Call the testing function
	addBlock();

	// Tests and assertions
	const blockchain = JSON.parse(fs.readFileSync("./blockchain.json"));
	const addedBlock = blockchain[blockchain.length - 1];
	const previousBlock = blockchain[blockchain.length - 2];

	expect(addedBlock.hash).not.toBe();
	expect(addedBlock.previousHash).toBe(previousBlock.hash);
	expect(addedBlock.transactions).toMatchObject([
		{
			fromAddress: "123",
			toAddress: "456",
			amount: 789,
		},
	]);
});
