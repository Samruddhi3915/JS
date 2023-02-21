const User = require("./06classjs.js");
const sam = new User("sam", "sam@gmail.com");
console.group(sam.getInfo());
sam.enrollCourse("MERN");
sam.enrollCourse("C++");
console.log(sam.getCourseList());

let courses = sam.getCourseList();
courses.forEach((c) => {
  console.log(c);
});
