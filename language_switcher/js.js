"use strict";

document.querySelector(".language-switcher").addEventListener("change", (event) => {
  switchLanguage(event.target.value);
});

const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

// const locale = "da";

switchLanguage("da");
document.querySelector(".language-switcher").value = "da";

switchLanguage();
function switchLanguage() {
  texts[locale].texts.forEach((item) => {
    document.querySelector(item.location).textContent = item.text;
  });
}

// document.querySelector(texts[locale].texts[0].location).textContent = texts[locale].texts[0].text;
