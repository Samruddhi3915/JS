var name = "sam";
console.log("Line number 2", name);

function sayName() {
  var name = "Samruddhi";
  console.log("line number 6", name);
  sayNameTwo();
  function sayNameTwo() {
    console.log("Line number 9", name);
  }
}
sayName();
