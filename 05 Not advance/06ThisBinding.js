const sam = {
  firstName: "Samruddhi",
  lastName: "Ahire",
  role: "Admin",
  courseCount: 3,
  getInfo: function () {
    console.log(
      `First name is ${this.firstName} Last name is ${this.lastName} Role is ${this.role} and has enrolled in ${this.courseCount} courses`
    );
  },
};

const dj = {
  firstName: "Rock",
  lastName: "DJ",
  role: "sub-admin",
  courseCount: 4,
};

// sam.getInfo();
// dj.getInfo();

sam.getInfo.bind(dj)();
var d = sam.getInfo.bind(dj);
d;

sam.getInfo.call(dj);
