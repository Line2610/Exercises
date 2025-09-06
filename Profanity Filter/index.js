"use strict";

const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

let str = "Programmering er sjovt! Men husk altid at bruge var, float og marquee i moderne kodning";

str = str.replace("var", "const");
str = str.replace("float", "grid");
str = str.replace("marquee", "just don't");

console.log(str);

let isKlikked = false;

document.querySelector("button").addEventListener("click", klik);

function klik() {
  if (!isKlikked) {
    curseWords.forEach((word) => {
      str = str.replaceAll(word.bad, word.good);
    });
    document.getElementById("output").textContent = str;
    isKlikked = true;
  }
}
