var user = {
  firstName: "Sam",
  lastName: "Ahire",
  role: "Admin",
  loginCount: 32,
  facebookSignedIn: true,
};

console.log(user);
console.log(user.firstName);
console.log(user["lastName"]);
user.loginCount = 45;
console.log(user.loginCount);
console.table(user);
