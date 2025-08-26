"use strict";

const btn = document.querySelector("button");
const input = document.querySelector("input");
const h2 = document.querySelector("h2");

const randomNum = Math.floor(Math.random() * 100) + 1;
let brugerGuess;

btn.addEventListener("click", klik_btn);
function klik_btn() {
  brugerGuess = input.value;

  console.log("klik");
  let feedbackText;
  if (brugerGuess < randomNum) {
    feedbackText = "for lavt";
  } else if (brugerGuess > randomNum) {
    feedbackText = "for højt";
  } else {
    feedbackText = "rigtigt";
  }

  h2.textContent = feedbackText;

  console.log(feedbackText);
}
