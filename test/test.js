const assert = require('assert');
const path = require('path');
const day1 = require(path.resolve('code_problems', 'day1.js'));

describe('Daily Coding Problems', function() {
	describe('Day 1', function() {
		it('should return false if listOfNumbers is empty', async function() {
			const result = await day1.numbersInArrayEqualK([], 17);
			assert.equal(result, false)
		});

		it('should return false if k is not a number', async function() {
			const result = await day1.numbersInArrayEqualK([10, 15, 3, 7], 'a');
			assert.equal(result, false)
		});

		it('should return true if two numbers within an array add up to the value of k', async function() {
			const result = await day1.numbersInArrayEqualK([10, 15, 3, 7], 17);
			assert.equal(result, true)
		});
	});
});
