// Given a list of numbers and a number k
// Return whether any two numbers from the list
// add up to k
module.exports.numbersInArrayEqualK = async (listOfNumbers, valueOfk) => {
	if (listOfNumbers.length < 2 || !Number.isInteger(parseInt(valueOfk))) return false;
	const regex = /([A-Za-z])/g;
	const numbers = [];
	listOfNumbers.forEach(number => {
		const stringNumber = number.toString();
		const isMatch = stringNumber.match(regex);
		if(!isMatch) {
			numbers.push(parseInt(number));
		}
	});
	if (numbers.length < 2) return false;
	const totalOfNumbers = numbers.reduce((acc, cur) => acc + cur);
	if (totalOfNumbers < valueOfk) return false;
};
