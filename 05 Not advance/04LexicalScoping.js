// function init() {
//   var firstName = "samruddhi";
//   console.log("Inside Init");
//   function sayFirstName() {
//     console.log(firstName);
//   }
//   return sayFirstName;
// }
// var value = init();

// value();

function addition(x) {
  return function (y) {
    return x + y;
  };
}

var adde = addition(5);
console.log(adde(4));

//outputs 9
//because of closure
addition(4)(5);
// 9;
