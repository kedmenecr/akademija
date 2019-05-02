"use strict";

var arr = [1, 2, 3, 4, 5, 6];
var lol = arr.filter(function (x) {
  return x > 3;
});
console.log('lol', lol);
var lulac = arr.map(function (x) {
  return x * 2;
});
console.log('lulac', lulac);