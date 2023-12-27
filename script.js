let inputBox = document.querySelector(".input");
let counter = document.querySelector(".counter");
let inputMaxLength = inputBox.getAttribute("maxlength");

inputBox.addEventListener("keyup", function () {
  counter.innerHTML = inputMaxLength - inputBox.value.length;
});
