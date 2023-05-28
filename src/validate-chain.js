const { isValidChain } = require("./blockchain-helpers");

const validateChain = () => {
	if (isValidChain()) {
		console.log("Chain is valid");
	} else {
		console.log("Chain is not valid");
	}
};

validateChain();

module.exports = { validateChain };
