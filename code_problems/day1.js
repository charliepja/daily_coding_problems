// Given a list of numbers and a number k
// Return whether any two numbers from the list
// add up to k


module.exports.numbersInArrayEqualK = async (listOfNumbers, valueOfk) => {
	// Checks that listOfNumbers contains at least 2 items, and that valueOfk is a number
	if (listOfNumbers.length < 2 || !Number.isInteger(parseInt(valueOfk))) return false;

	// regex to filter out any alphabetic characters or words
	const regex = /([A-Za-z])/g;

	// empty array to take in any non-alphabetic characters or words
	const numbers = [];

	// loop to filter against the regex and uses forEach loop due to not needing to return out of the loop
	listOfNumbers.forEach(number => {
		const stringNumber = number.toString();
		const isMatch = stringNumber.match(regex);
		if(!isMatch) {
			numbers.push(parseInt(number));
		}
	});

	// Checks that new array has at least 2 items
	if (numbers.length < 2) return false;

	// Gets the total of the new array and checks that the total is greater than valueOfk
	// Does this check to ensure that it is possible that 2 numbers could equal valueOfk
	const totalOfNumbers = numbers.reduce((acc, cur) => acc + cur);
	if (totalOfNumbers < valueOfk) return false;

	// declares conditions of while loop
	let doesEqualK = false;
	let i = 1;

	// uses while loop as the loop should only continue while certain conditions are met
	while((doesEqualK === false && i < numbers.length)) {
		const equation = numbers[0] + numbers[i];
		if(equation === valueOfk) return doesEqualK = true;
		i++;
	}

	return doesEqualK;
};
