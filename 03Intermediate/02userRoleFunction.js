var getUserRole = function (name, role) {
  switch (role) {
    case "admin":
      return `${name} is admin with all access`;
      break;
    case "subadmin":
      return `${name} is subadmin with  access to create and delete `;
      break;
    case "subadmin":
      return `${name} is sub- admin with access to create/delete courses`;
      break;
    case "testprep":
      return `${name} is testprep with access to create/delete tests`;
      break;
    case "user":
      return `${name} is a user to conusme content`;
      break;
    default:
      return `${name} is a trail user`;
      break;
  }
};
console.log(getUserRole("samruddhi", "admin"));

var getr = getUserRole("sammy", "testprep");
console.log(getr);
