var User = {
  name: "",
  getUserName: function () {
    console.log(`User name is: ${this.name}`);
  },
};

var sam = Object.create(User);
console.log(sam);

sam.name = "Samruddhi";
sam.getUserName();

var sam1 = Object.create(User, {
  name: { value: "Mrunal" },
  courseCount: { value: 3 },
});
sam.getUserName();
