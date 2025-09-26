const btnSet = document.querySelector(".btnSet");
const btnGet = document.querySelector(".btnGet");
const set = document.querySelector(".set");
const get = document.querySelector(".get");

btnSet.addEventListener("click", klikSet);
btnGet.addEventListener("click", klikGet);

const etArray = [{ nama: "Andi" }, { nama: "Budi" }];

function klikSet() {
  localStorage.setItem("myData", JSON.stringify(etArray));
}

function klikGet() {
  get.value = localStorage.getItem("myData");
}
