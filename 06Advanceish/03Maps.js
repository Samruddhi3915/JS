var myMap = new Map();
myMap.set(1, "Sam");
myMap.set(2, "Sam1");
myMap.set(3, "Sam2");
myMap.set(4, "Sam3");
console.log(myMap);

for (let key of myMap.keys()) {
  console.log(`Key is ${key}`);
}
for (let value of myMap.values()) {
  console.log(`value is ${value}`);
}
for (let [key, value] of myMap) {
  console.log(`Key is ${key} and value is ${value}`);
}

myMap.forEach((key) => {
  console.log(`${key}`);
});

myMap.delete(2);
console.log(myMap);
