// var num = 2;
// function sayMe() {
//   console.log("say me");
// }
// sayMe();

tipper(5);

function tipper(a) {
  var bill = parseInt(a);
  console.log(bill + 5);
}

var bigTipper = function (a) {
  var bill = parseInt(a);
  console.log(bill + 15);
};
bigTipper(200);
var name = "sam";
console.log(name);

function sayName() {
  var name = "sam1";
  console.log(name);
}
sayName();
console.log(name);
