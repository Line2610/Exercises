const list = document.querySelector("ul");
const li = document.createElement("li");
li.style.setProperty("--height", "30");
list.appendChild(li);

let myArray = [];

// Start med 20 søjler
for (let i = 0; i < 20; i++) {
  const value = Math.floor(Math.random() * 100) + 1;
  myArray.push(value);

  const li = document.createElement("li");
  li.style.setProperty("--height", value);
  list.appendChild(li);
}

setInterval(genereSoejler, 1000);

function genereSoejler() {
  // Tilføj ny værdi i starten
  const value = Math.floor(Math.random() * 100) + 1;
  myArray.unshift(value);

  // Tilføj ny søjle i starten af DOM
  const li = document.createElement("li");
  li.style.setProperty("--height", value);
  list.insertBefore(li, list.firstElementChild);

  // Fjern sidste søjle hvis der er mere end 20
  if (myArray.length > 20) {
    myArray.pop();
    list.removeChild(list.lastElementChild);
  }
}
