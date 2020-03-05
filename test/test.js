const assert = require('assert');
const path = require('path');
const day1 = require(path.resolve('code_problems', 'day1.js'));
const day2 = require(path.resolve('code_problems', 'day2.js'));

describe('Daily Coding Problems', function() {
	describe('Day 1', function() {
		it('should return false if listOfNumbers is empty', async function() {
			const result = await day1.numbersInArrayEqualK([], 17);
			assert.equal(result, false);
		});

		it('should return false if k is not a number', async function() {
			const result = await day1.numbersInArrayEqualK([10, 15, 3, 7], 'a');
			assert.equal(result, false);
		});

		it('should return false if listOfNumbers contains only 1 number', async function() {
			const result = await day1.numbersInArrayEqualK([10], 17);
			assert.equal(result, false);
		});

		it('should return false if the total of all numbers is less than k', async function() {
			const result = await day1.numbersInArrayEqualK([4, 1, 3], 17);
			assert.equal(result, false);
		});

		it('should return false if array is just alphabetic characters', async function() {
			const result = await day1.numbersInArrayEqualK(['four', 'five', 'seven', 'ten'], 17);
			assert.equal(result, false);
		});

		it('should return true if two numbers within an array add up to the value of k', async function() {
			const result = await day1.numbersInArrayEqualK([10, 15, 3, 7], 17);
			assert.equal(result, true);
		});

		it('should return false if two numbers within an array do not add up to the value of k', async function() {
			const result = await day1.numbersInArrayEqualK([10, 15, 3, 7], 28);
			assert.equal(result, false);
		});

		it('should return true if two numbers within an array add up to the value of k even if some of the array is strings', async function() {
			const result = await day1.numbersInArrayEqualK([10, 'blue', 15, 'green', 3, 'red', 7, 'orange'], 17);
			assert.equal(result, true);
		});

		it('should return false if two numbers within an array do not add up to the value of k even if some of the array is strings', async function() {
			const result = await day1.numbersInArrayEqualK([10, 'blue', 15, 'green', 3, 'red', 7, 'orange'], 35);
			assert.equal(result, false);
		});
	});

	describe('Day 2', function() {
		it('should return "No numbers" if array of numbers is empty', async function() {
			const result = await day2.productOfNumbers([]);
			assert.equal(result, 'No numbers');
		});

		it('should return "No numbers" if array of numbers is strings', async function() {
			const result = await day2.productOfNumbers(['1', '2', '3', '4', '5']);
			assert.equal(result, 'No numbers');
		});

		it('should return "Not enough numbers" if array length is less than 3', async function() {
			const result = await day2.productOfNumbers([1, 2]);
			assert.equal(result, 'Not enough numbers');
		});

		it('should return an array of new numbers that has the product of all numbers excluding the number at each index', async function() {
			const result = await day2.productOfNumbers([1, 2, 3, 4, 5]);
			assert.deepStrictEqual(result, [120, 60, 40, 30, 24]);
		});
	});
});
