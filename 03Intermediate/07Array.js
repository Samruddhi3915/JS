var countries = ["India", "USA", "Dubai"];
var states = ["MP", "UP", "MH"];
console.log(states[0]);
console.log(countries.length);
states[0] = "Punjab";
console.log(states[0]);
var user = ["hitesh", "abc@gmail.com", 1, 34, true];
console.log(user);
user.pop();
console.log(user);
user.unshift("New value");
console.log(user);
user.shift();
console.log(user);

console.log(user.indexOf(1));

console.log(Array.from("Samruddhi"));

// Output: MP;
// 3;
// Punjab[("hitesh", "abc@gmail.com", 1, 34, true)][
//   ("hitesh", "abc@gmail.com", 1, 34)
// ][("New value", "hitesh", "abc@gmail.com", 1, 34)][
//   ("hitesh", "abc@gmail.com", 1, 34)
// ];
// (2)[("S", "a", "m", "r", "u", "d", "d", "h", "i")];
