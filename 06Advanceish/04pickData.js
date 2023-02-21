const user = ["Samruddhi", 3, "admin"];
// console.log(name[1]);

//destructring

// var role = user[2];
// var name = user[1];
// console.log(role);

// var [name, courseCount, role] = user;

// console.log(role);

const myUser = {
  name: "Sam",
  courseCount: 5,
  role: "admin",
};

console.log(myUser.name);

const { name, courseCount, role } = myUser;
console.log(courseCount);
