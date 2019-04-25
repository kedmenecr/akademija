exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item)
  },

  sum: function(arr) {
    sum = 0
    for(let i = 0; i < arr.length; i++){
      sum += arr[i]
    }
    return sum
  },
  
  remove: function(arr, item) {
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === item) {
        arr.splice(i, i)
      }
    }
    return arr
  },
  removeWithoutCopy: function(arr, item) {
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === item){
        arr.splice(i, 1)
        i--
      }
    }
    return arr
  },

  append: function(arr, item) {
    arr.push(item)
    return arr
  },

  truncate: function(arr) {
    arr.pop()
    return arr
  },

  prepend: function(arr, item) {
    arr.unshift(item)
    return arr
  },

  curtail: function(arr) {
    arr.shift()
    return arr
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2)
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item)
    return arr

  },

  count: function(arr, item) {
  //ne znam
  },

  duplicates: function(arr) {
    //ne znam baš
  },

  square: function(arr) {
    let result = []
    for(let i = 0; i<arr.length; i++){
      result.push(arr[i]*arr[i])
    }
    return result
  },

  findAllOccurrences: function(arr, target) {
    //ne znam
  }
};
