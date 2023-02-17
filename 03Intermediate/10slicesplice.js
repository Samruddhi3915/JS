var users = ["Ted", "Tom", "Ton", "Sam", "Sod"];
console.log(users.slice(1, 3));
console.log(users.slice(1));
console.log(users.slice(users.length - 1));

users.splice(1, 2, "Hii");
console.log(users);
users.splice(1, 3, "Hii", "Bye");
console.log(users);
