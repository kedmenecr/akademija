exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function (arr, item) {
    return arr.indexOf(item);
  },

  sum: function (arr) {
    return arr.reduce((prev, next) => prev + next, 0)
  },

  remove: function (arr, item) {
    return arr.filter(itemTest => item !== itemTest);
  },

  removeWithoutCopy: function (arr, item) {

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--
      }
    }
    return arr;
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
    arr.unshift(item)
    return arr
  },

  curtail: function (arr) {
    arr.shift()
    return arr
  },

  concat: function (arr1, arr2) {
    let arrNew = [...arr1, ...arr2]
    return arrNew
  },

  insert: function (arr, item, index) {
    arr.splice(index, 0, item)
    return arr
  },

  count: function (arr, item) {
    let count = 0;
    arr.forEach(element => {
      if (element === item) {
        count++
      }
    })

    return count
  },

  duplicates: function (arr) {

    let duplicateArray = []
    let arr2 = [...arr]
    while (arr2.length > 0) {
      const currElement = arr2.shift()
      if (arr2.includes(currElement) &&
        !duplicateArray.includes(currElement)) {
        duplicateArray.push(currElement)
      }
    }

    return duplicateArray;
  },

  square: function (arr) {
    let newMap = arr.map(item => {
      return item * item
    })

    return newMap
  },

  findAllOccurrences: function (arr, target) {
    let i
    let duplicates = []

    for (i = 0; i < arr.length; i += 1) {
      if (arr[i] === target) {
        duplicates.push(i);
      }
    }

    return duplicates;
  }

};
