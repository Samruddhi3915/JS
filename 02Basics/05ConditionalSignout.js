var authenticated = false;
if (authenticated) {
  console.log("Show signout button");
} else {
  console.log("Show login button");
}

authenticated
  ? console.log("Show signout button")
  : console.log("Show login button");
