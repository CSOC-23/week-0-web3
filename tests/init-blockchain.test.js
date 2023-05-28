const { initBlockchain } = require("../src/init-blockchain.js");
const { readFileSync } = require("fs");

test(`should correctly initialise a blockchain`, () => {
	initBlockchain();
	const blockchain = JSON.parse(readFileSync("./blockchain.json"));

	expect(blockchain.length).toBe(1);
	expect(blockchain[0].hash).toBe("0");
	expect(blockchain[0].previousHash).toBe(null);
});
