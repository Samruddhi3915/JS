console.log(this);
//in browser
// console.log(this)
// VM118:1 Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}

//not a regular function call
var user = {
  firstName: "Samruddhi",
  courseCount: 4,
  getCourseCount: function () {
    console.log("Line 12", this);
    function sayHello() {
      console.log("Hello");
      console.log("Line 12", this);
    }
    sayHello();
  },
};
user.getCourseCount();

//regular function call
function sayHello() {
  console.log("Hello");
}
sayHello();
