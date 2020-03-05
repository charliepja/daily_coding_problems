module.exports.removeStringsFromArray = async (array) => {
	if(!array || array.length === 0) return;
	const regex = /([A-Za-z])/g;
	const stringlessArray = [];
	array.forEach(i => {
		const iString = i.toString();
		const isMatch = iString.match(regex);
		if(!isMatch) {
			stringlessArray.push(parseInt(i));
		}
	});
	return stringlessArray;
};
