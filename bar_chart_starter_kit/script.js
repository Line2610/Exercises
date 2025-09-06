const list = document.querySelector("ul");
const li = document.createElement("li");
li.style.setProperty("--height", "30");
list.appendChild(li);

let myArray = [];

setInterval(genereSoejler, 1000);

function genereSoejler() {
  // Tilføj ny værdi i starten
  const value = Math.floor(Math.random() * 100);
  myArray.push(value);


  if (myArray.length > 20) {
    myArray.shift();
    list.removeChild(list.lastElementChild);
  }

  const li = document.createElement("li");
  li.style.setProperty("--height", value);
  list.appendChild(li);
}








