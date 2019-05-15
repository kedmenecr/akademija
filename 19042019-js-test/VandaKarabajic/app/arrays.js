exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
	indexOf: function (arr, item) {
		let indexIs = arr.indexOf(item)
		return indexIs
	},

	sum: function (arr) {
		var sum = 0;
		for (let i = 0; i < arr.length; i++) {
			sum += arr[i];
		}
		return sum
	},

	remove: function (arr, item) {
		return arr.filter((i) => i !== item);
	},

	removeWithoutCopy: function (arr, item) {
		//ne razumijem bas sto trebam napraviti :'(
	},

	append: function (arr, item) {
		arr.push(item)
		return arr
	},

	truncate: function (arr) {
		arr.pop();
		return arr;
	},

	prepend: function (arr, item) {
		arr.unshift(item);
		return arr;
	},

	curtail: function (arr) {
		arr.shift();
		return arr;
	},

	concat: function (arr1, arr2) {
		return arr1.concat(arr2)

	},

	insert: function (arr, item, index) {
		arr.splice(index, 0, item)
		return arr
	},

	count: function (arr, item) {
		let count = 0;
		arr.forEach((br) => (br === item && count++))
		return count
	},

	duplicates: function (arr) {

	},

	square: function (arr) {
		let result = arr.map(x => x * x);
		return result
	},

	findAllOccurrences: function (arr, target) {

	}
};
