// var ret = Math.max(2, 4, 5, 67, 99);
// console.log(ret);

// var myObj = {};
// Object.assign(myObj, { a: 1, b: 2, c: 3 }, { z: 6, y: 3, l: 1 });
// console.log(myObj);

function sumOne(a, b) {
  return a + b;
}
var myArr = [5, 4];
// console.log(sumOne(myArr));

function sumTwo(...args) {
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return sum;
}
console.log(sumTwo(1, 3, 5, 2, 3));
