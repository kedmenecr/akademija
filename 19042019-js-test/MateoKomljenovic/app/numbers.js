exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return (parseInt(num, bit) === 1)
  },

  base10: function(str) {
    return parseInt(str, 2)
  },

  convertToBinary: function(num) {
    return parseInt(num).toString(2) 

  },

  multiply: function(a, b) {
    return (a * b).toFixed(1)
  }
};
