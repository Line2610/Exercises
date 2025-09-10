"use strict";

// const switcher = document.getElementById("switcher");

// switcher.addEventListener("change", function () {
//   document.body.setAttribute("data-theme", this.value);
// });

const bodyElm = document.querySelector("body");

doucument.querySelector("#switcher").addEventListener("change", (evt) => {
  bodyElm.dataset.theme = evt.target.value;
});

// switcher er din dropdown (<select>).
// Når brugeren vælger et nyt tema i dropdownen, udløses "change"-eventet.
// Koden sætter data-theme-attributten på <body> til den valgte værdi (fx "dark", "light", "hawaii").
// Din CSS bruger [data-theme="..."] til at definere forskellige farve-variabler for hvert tema.
// Når data-theme ændres, opdateres CSS-variablerne (--header, --main, --footer), og farverne på header, main og footer skifter automatisk.
