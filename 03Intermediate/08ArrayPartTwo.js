function isEven(element) {
  if (element % 2 === 0) {
    return true;
  }
  return false;
}
console.log(isEven(2));

function isEven2(ele) {
  return ele % 2 === 0;
}
console.log(isEven2(3));
var isEven3 = (element) => {
  return element % 2 === 0;
};
console.log(isEven3(67));

var t = [2, 4, 8, 6].every(isEven);
console.log(t);

//callback function with return

var t = [2, 4, 99, 8].every((e) => {
  return e % 2 == 0;
});
console.log(t);

//callback function without return
var t = [2, 8, 4, 8].every((e) => e % 2 === 0);
console.log(t);
