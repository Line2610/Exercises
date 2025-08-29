"use strict";

function greeting(firstName) {
  return `Hello §{firstName}`;
}

const result = greeting("Klaus");
console.log(result);






function getRandomNum (max){
    return Math.floor(Math.random() * max);
}

const myRandomNum = getRandomNum(100);

console.log("myRandomNum:", myRandomNum (50));