const path = require('path');
const functions = require(path.resolve('code_problems', 'helpers.js'));

module.exports.productOfNumbers = async (numbers) => {
	const newArray = await functions.removeStringsFromArray(numbers);
	if(numbers.length === 0 || newArray.length === 0) return 'No numbers';
	if(newArray.length < 3) return 'Not enough numbers';

	const resultArray = [];

	for(const i in newArray) {
		const cloneArray = Array.from(newArray);
		cloneArray.splice(i, 1);
		const result = cloneArray.reduce((acc, cur) => acc * cur);
		resultArray.push(result);
	}

	return resultArray;
};
