exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
	argsAsArray: function (fn, arr) {
		return fn(...arr);
	},

	speak: function (fn, obj) {
		return fn.call(obj)
	},

	functionFunction: function (str) {
		return function (_str) {
			return str + ", " + _str
		}
	},

	makeClosures: function (arr, fn) {

	},

	partial: function (fn, str1, str2) {
		return function (str3) {
			return fn(str1, str2, str3)
		}
	},

	useArguments: function () {
		sums = 0;
		for (let i = 0; i < arguments.length; i++) {
			sums += arguments[i]
		}
		return sums
	},

	callIt: function (fn) {
		var arr = [];
		for (let i = 1; i < arguments.length; i++) {
			arr.push(arguments[i])
		}
		return fn.apply(this, arr)
		//cannot use "call" here cuz it requires the paramaters to be listed
	},

	partialUsingArguments: function (fn) {

	},

	curryIt: function (fn) {
		return function (hello1) {
			return function (hello2) {
				return function (hello3) {
					return fn.call(this, hello1, hello2, hello3);
				}
			}
		}
	}
};
