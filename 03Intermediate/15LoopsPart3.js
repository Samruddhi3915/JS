const names = ["YT", "FB", "IG", "WA"];

for (const n of names) {
  console.log(n);
}

const symbols = {
  yt: "Youtube",
  ig: "instagram",
  fb: "facebook",
};
for (const n in symbols) {
  //   console.log(n); //gives keys
  //gives keys and values
  console.log(symbols[n]);
  console.log(`Key is ${n} and value is ${symbols[n]}`);
}
