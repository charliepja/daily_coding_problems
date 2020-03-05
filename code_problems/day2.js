// Given an array of integers,
// return a new array such that each element at index i of the new array
// is the product of all the numbers in the original array except the one at i.

const path = require('path');
const functions = require(path.resolve('code_problems', 'helpers.js'));

module.exports.productOfNumbers = async (numbers) => {
	// Helper function which removes and non-number string from the array
	// and converts number strings to ints
	const newArray = await functions.removeStringsFromArray(numbers);

	// Checks that it is possible to return an array that is product of all numbers
	if(numbers.length === 0 || newArray.length === 0) return 'No numbers';
	if(newArray.length < 3) return 'Not enough numbers';

	// Initialises a new array to take in the result of each iteration of the for loop
	const resultArray = [];

	// For loop which creates a shallow copy of the newArray array
	// removes the element at index i
	// Gets the product of the remaining numbers
	// Adds the result to the resultArray
	for(const i in newArray) {
		const cloneArray = Array.from(newArray);
		cloneArray.splice(i, 1);
		const result = cloneArray.reduce((acc, cur) => acc * cur);
		resultArray.push(result);
	}

	// Returns the result of the for loop
	return resultArray;
};
