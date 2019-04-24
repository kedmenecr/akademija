exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
	indexOf: function (arr, item) {
		return arr.indexOf(item)
	},

	sum: function (arr) {
		return arr.reduce((acc, item) => acc + item)
	},

	remove: function (arr, item) {
		let newArr = []
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] !== item) {
				newArr.push(arr[i])
			}
		}
		return newArr
	},

	removeWithoutCopy: function (arr, item) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === item) {
				arr.splice(i, 1)
				i--
			}
		}

		return arr
	},

	append: function (arr, item) {
		arr.push(item)
		return arr
	},

	truncate: function (arr) {
		arr.pop()
		return arr
	},

	prepend: function (arr, item) {
		arr.unshift(item)
		return arr
	},

	curtail: function (arr) {
		arr.shift()
		return arr
	},

	concat: function (arr1, arr2) {
		let result = arr1.concat(arr2)
		return result
	},

	insert: function (arr, item, index) {
		arr.splice(index, 0, item)
		return arr
	},

	count: function (arr, item) {
		let res = []

		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === item) {
				res.push(item)
			}
		}

		return res.length
	},

	duplicates: function (arr) {
		let sortedArr = arr.sort()
		let result = []

		for (let i = 0; i < sortedArr.length; i++) {
			if (sortedArr[i + 1] === sortedArr[i]) {
				if (result.includes(sortedArr[i])) {
					continue
				} else {
					result.push(sortedArr[i])
				}
			}
		}
		return result
	},

	square: function (arr) {
		let result = []
		for (let i = 0; i < arr.length; i++) {
			result.push(Math.pow(arr[i], 2))
		}
		return result
	},

	findAllOccurrences: function (arr, target) {
		let result = []
		let indexOfTarget = arr.indexOf(target)

		for (let i = 0; i < arr.length; i++) {
			if (indexOfTarget !== -1) {
				result.push(indexOfTarget)
				indexOfTarget = arr.indexOf(target, indexOfTarget + 1)
			}
		}

		return result
	}
};
