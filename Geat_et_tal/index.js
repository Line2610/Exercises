const h2 = document.querySelector("h2");
const btn1 = document.querySelector("#start");
const btn2 = document.querySelector("#højt");
const btn3 = document.querySelector("#lavt");
const btn4 = document.querySelector("#rigtigt");

let min = 1;
let max = 100;
let guess;
let feedbackText;

function makeGuess() {
  guess = Math.floor((min + max) / 2);
  h2.textContent = `Gætter på: ${guess}`;
  btn1.disabled = true;
  btn2.disabled = false;
  btn3.disabled = false;
  btn4.disabled = false;
}

function startGame() {
  makeGuess();
}

btn1.disabled = false;
btn2.disabled = true;
btn3.disabled = true;
btn4.disabled = true;

btn1.addEventListener("click", startGame);
btn2.addEventListener("click", () => {
  max = guess - 1;
  makeGuess();
});
btn3.addEventListener("click", () => {
  min = guess + 1;
  makeGuess();
});
btn4.addEventListener("click", () => {
  h2.textContent = `Yaaay! Hvor er jeg god!`;
  btn1.disabled = false;
  btn2.disabled = true;
  btn3.disabled = true;
  btn4.disabled = true;
});

h2.textContent = feedbackText;

console.log(feedbackText);
