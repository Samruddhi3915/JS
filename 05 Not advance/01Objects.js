var User = function (firstName, courseCount) {
  this.firstName = firstName;
  this.courseCount = courseCount;
  this.getCourseCount = function () {
    console.log(`Course count is ${this.courseCount}`);
  };
};

User.prototype.getFirstName = function () {
  console.log(`Firstname is ${this.firstName}`);
};

//new=invokes contructor and creating unique instance at every single time,moves global object to inside to User
var hitesh = new User("hitesh", 2);
// console.log(hitesh);
hitesh.getCourseCount();
hitesh.getFirstName();

var sam = new User("Sam", 1);
// console.log(sam);
sam.getCourseCount();
