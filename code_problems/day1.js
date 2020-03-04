// Given a list of numbers and a number k
// Return whether any two numbers from the list
// add up to k
module.exports.numbersInArrayEqualK = async (listOfNumbers, valueOfk) => {
	if (listOfNumbers.length === 0 || !Number.isInteger(parseInt(valueOfk))) return false;
	const numbers = listOfNumbers;
	const k = valueOfk;
};
