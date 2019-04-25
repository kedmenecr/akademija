exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(arr[0], arr[1], arr[2])
  },

  speak: function(fn, obj){
    // console.log(obj.greeting, obj.name)
    // console.log(fn(obj.greeting))
  },

  functionFunction: function(str) {
    // function a (){ 
    // return str + ' ' + 'world'
    // } 
    //   a()
  },

  makeClosures: function(arr, fn) {
    // console.log(fn(parseFloat(arr)))
  },

  partial: function(fn, str1, str2) {
  },

  useArguments: function() {

  },

  callIt: function(fn) {

  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
