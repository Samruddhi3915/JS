for (let i = 0; i < 10; i++) {
  console.log(i);
}

const myStates = ["MH", "UP", "MP", "Assam", 1987, "Kerala", "TN"];
for (let i = 0; i <= myStates.length; i++) {
  console.log(myStates[i]);
}

for (let i = 0; i < myStates.length; i++) {
  if (typeof myStates[i] !== "string") continue;
  console.log(myStates[i]);
}
for (let i = 0; i < myStates.length; i++) {
  if (typeof myStates[i] === "string") continue;
  console.log(myStates[i]);
}

console.log("do while loop");

let i = 0;
do {
  console.log(myStates[i]);
  i++;
} while (i < myStates.length);

console.log("while");
