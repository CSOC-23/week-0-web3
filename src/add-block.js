const {
	getBlockchain,
	writeBlockchain,
	getTransactions,
	writeTransactions,
} = require("./blockchain-helpers");


	function addNewBlock(hash,previousHash,transaction)
{	
	
	const newBlock={ hash,previousHash,transaction};
         const blockchain = getBlockchain();
        blockchain.push(newBlock);

	writeBlockchain(blockchain);
}

	



