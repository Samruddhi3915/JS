class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  #courseList = [];
  getInfo() {
    return { name: this.name, email: this.email };
  }
  enrollCourse(name) {
    this.#courseList.push(name);
  }
  getCourseList() {
    return this.#courseList;
  }
  login() {
    return "you are logged in";
  }
}
class subAdmin extends User {
  constructor(name, email) {
    super(name, email);
  }
  getAdminInfo() {
    return "I am subadmin";
  }
  login() {
    return "login for admin only";
  }
}

module.exports = User;

// const rock = new User("rock", "rock@gmail.com");
// console.log(rock.getInfo());
// rock.enrollCourse("C++");
// console.log(rock.getCourseList());
// console.log(rock.courseList);

const tom = new subAdmin("tom", "tom@");
console.log(tom.getAdminInfo());
console.log(tom.getInfo());
console.log(tom.login());
