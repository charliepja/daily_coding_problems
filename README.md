# Daily Coding Problems: JavaScript Edition
### Challenges provided by: https://www.dailycodingproblem.com/

Daily coding problems provides daily challenges that are similar to those that a developer would encounter during a technical test.
The aim of the website is to help developers refine their interview skills, and they source their challenges from developers who have worked
at top-tier companies.

---

## Day 1

*Given a list of numbers and a number k, return whether any two numbers from the list add up to k*

```js
numbers = [10, 15, 3, 7]
k = 17

Since 10 + 7 = 17, should return true
```

### Initial Planning

```
if numbers total < k return false

for number of numbers
	doesEqual = false
	i = 1

	while doesEqual = false
		if number > k return doesEqual = false
		if number + number[i] != k
			i++
			return doesEqual = false

	return doesEqual
```
