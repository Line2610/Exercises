"use strict";

window.addEventListener("DOMContentLoaded", start);

const Animal = {
  name: "-default-",
  desc: "-unknown animal-",
  type: "-unknown type- ",
  age: 0,
};

const allAnimals = [];

function start() {
  console.log("ready");

  document.getElementById("filter-cat").addEventListener("click", () => filterList("cat"));
  document.getElementById("filter-dog").addEventListener("click", () => filterList("dog"));
  document.getElementById("filter-all").addEventListener("click", () => filterList("all"));

  loadJSON();
}

function loadJSON() {
  fetch("animals.json")
    .then((response) => response.json())
    .then((jsonData) => {
      // when loaded, prepare objects
      prepareObjects(jsonData);
    });
}

function prepareObjects(jsonData) {
  jsonData.forEach((jsonObject) => {
    const animal = Object.create(Animal);

    const fullname = jsonObject.fullname;

    const firstSpace = fullname.indexOf(" ");
    const secondSpace = fullname.indexOf(" ", firstSpace + 1);
    const lastSpace = fullname.lastIndexOf(" ");

    const name = fullname.substring(0, firstSpace);
    const desc = fullname.substring(secondSpace + 1, lastSpace);
    const type = fullname.substring(lastSpace + 1);

    console.log(`name: _${name}_
    desc: _${desc}_
    type: _${type}_`);

    animal.name = name;
    animal.desc = desc;
    animal.type = type;
    animal.age = jsonObject.age;

    allAnimals.push(animal);

    // TODO: Create new object with cleaned data - and store that in the allAnimals array
    // TODO: MISSING CODE HERE !!!
  });

  displayList();
}

function filterList(animalType) {
  let filteredList = allAnimals;
  if (animalType === "cat") {
    filteredList = allAnimals.filter(isCat);
  } else if (animalType === "dog") {
    filteredList = allAnimals.filter(isDog);
  } else if (animalType === "all") {
    filteredList = allAnimals;
  }
  displayList(filteredList);
}

function isCat(animal) {
  return animal.type === "cat";

  // Alternatively, simply:
  //   if (animal.type === "cat") {
  //     return true;
  //   } else {
  //     return false;
  //   }
}

function isDog(animal) {
  return animal.type === "dog";
}

function displayList(list = allAnimals) {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  list.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
