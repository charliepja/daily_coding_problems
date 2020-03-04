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

		it('should return false if listOfNumbers contains only 1 number', async function() {
			const result = await day1.numbersInArrayEqualK([10], 17);
			assert.equal(result, false)
		});

		it('should return false if the total of all numbers is less than k', async function() {
			const result = await day1.numbersInArrayEqualK([4, 1, 3], 17);
			assert.equal(result, false)
		});

		it('should return false if array is just alphabetic characters', async function() {
			const result = await day1.numbersInArrayEqualK(['four', 'five', 'seven', 'ten'], 17);
			assert.equal(result, false)
		});

		it('should return true if two numbers within an array add up to the value of k', async function() {
			const result = await day1.numbersInArrayEqualK([10, 15, 3, 7], 17);
			assert.equal(result, true)
		});

		it('should return false if two numbers within an array do not add up to the value of k', async function() {
			const result = await day1.numbersInArrayEqualK([10, 15, 3, 7], 28);
			assert.equal(result, false)
		});

		it('should return true if two numbers within an array add up to the value of k even if some of the array is strings', async function() {
			const result = await day1.numbersInArrayEqualK([10, 'blue', 15, 'green', 3, 'red', 7, 'orange'], 17);
			assert.equal(result, true)
		});

		it('should return false if two numbers within an array do not add up to the value of k even if some of the array is strings', async function() {
			const result = await day1.numbersInArrayEqualK([10, 'blue', 15, 'green', 3, 'red', 7, 'orange'], 35);
			assert.equal(result, false)
		});
	});
});
