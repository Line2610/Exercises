"use strict";

let userChoice;
let computerChoice;
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

addEventListenersToButtons();
function addEventListenersToButtons() {
  rockBtn.addEventListener("click", rockKlik);
  paperBtn.addEventListener("click", paperKlik);
  scissorsBtn.addEventListener("click", scissorsKlik);
}

function rockKlik() {
  console.log("rock");
  userChoice = "rock";
  computerGuess();
}

function paperKlik() {
  console.log("paper");
  userChoice = "paper";
  computerGuess();
}

function scissorsKlik() {
  console.log("scissors");
  userChoice = "scissors";
  computerGuess();
}

function computerGuess() {
  const choice_arr = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  computerChoice = choice_arr[randomNum];
  console.log("computerChoice" + computerChoice);

  console.log(userChoice);
  computerChoice = "paper";
  animationStarter();
}

function animationStarter() {
  player1.classList.add("shake");
  player2.classList.add("shake");

  player1.addEventListener("animationend", animationEnd);
  player2.addEventListener("animationend", animationEnd);
}

function animationEnd() {
  player1.classList.remove("shake");
  player2.classList.remove("shake");

  player1.classList.add(userChoice);
  player2.classList.add(computerChoice);

  showResultScreen();
}

function showResultScreen() {}
