const myButton = document.querySelector("button");

function changeColor(colors) {
  document.querySelector("body").style.backgroundColor = colors;
  document.querySelector("body").style.transition = "1s";
}
