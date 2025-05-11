const array1 = "https://dummyjson.com/quotes/random";

const content = document.querySelector(".content");
const leftJoke = document.querySelector(".joke");
const generateBtn = document.getElementById("leftJokebtn");
const comparebtn = document.getElementById("compare");
const lengthBtn = document.getElementById("length");
const deferenceBtn = document.getElementById("deference");
const rightBtn = document.getElementById("rightBtn");
const rightJoke = document.querySelector(".rightjoke");

generateBtn.addEventListener("click", function () {
  fetch(array1)
    .then((response) => response.json())
    .then((data) => {
      leftJoke.textContent = data.quote;
    });
});

rightBtn.addEventListener("click", function () {
  fetch(array1)
    .then((response) => response.json())
    .then((data) => {
      rightJoke.textContent = data.quote;
    });
});
