// const red = document.querySelector(".red");
const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");

const orange = document.querySelector(".orange");

const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

//working in browser only
// console.log(window.getComputedStyle(document.querySelector(".red")));

//grabbing background color of class red
// window
//   .getComputedStyle(document.querySelector(".red"))
//   .getPropertyValue("background");
//OP:
// "rgb(228, 66, 54) none repeat scroll 0% 0% / auto padding-box border-box";

const getBGColor = (selectedElement) => {
  return window.getComputedStyle(selectedElement).backgroundColor;
};

var orangeElementColor = getBGColor(orange);

if (orange) {
  orange.addEventListener("mouseenter", () => {
    center.style.background = orangeElementColor;
  });
}
