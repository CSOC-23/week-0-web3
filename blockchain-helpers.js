//read the docs to know about fs library https://node.readthedocs.io/en/latest/api/fs/
import { writeFileSync, readFileSync } from 'fs';


export function writeBlockchain(blockchain) {
  const blockchainString = JSON.stringify(blockchain, null, 2);
  writeFileSync('./blockchain.json', blockchainString);
}

export function getBlockchain() {
  const blockchainFile = readFileSync('./blockchain.json');
  const blockchain = JSON.parse(blockchainFile);
  return blockchain;
}

export function isValidChain() {

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
export function writeTransactions(transactions) {
  const transactionsString = JSON.stringify(transactions, null, 2);
  writeFileSync('./transactions.json', transactionsString);
}

export function getTransactions() {
  const transactionsFile = readFileSync('./transactions.json');
  const transactions = JSON.parse(transactionsFile);
  return transactions;
}