var user = {
  firstName: "Sam",
  lastName: "Ahire",
  role: "Admin",
  loginCount: 32,
  facebookSignedIn: true,
  courseList: [],
  buyCourse: function (courseName) {
    this.courseList.push(courseName);
  },
  getCourse: function () {
    return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
  },
  info: function () {
    return `${this.firstName} ${this.lastName} has a ${this.role} role with a ${this.loginCount} and is currently a active user on facebook with value ${this.facebookSignedIn} and has a coursList of ${this.courseList}`;
  },
};
console.log(user.firstName);
user.buyCourse("MERN STACK");
console.log(user.getCourse());
console.log(user.info());
