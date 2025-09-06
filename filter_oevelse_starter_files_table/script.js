const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");
showTheseVehicles(vehicles);

function erElektrisk(vehicle) {
  if (vehicle.isElectric) {
    return true;
  }
}
const onlyElectricVehicles = vehicles.filter(erElektrisk);
// showTheseVehicles(vehicles.filter(erElektrisk));

function isMore2(vehicle) {
  if (vehicle.passengers > 2) {
    return true;
  }
}
// showTheseVehicles(vehicles.filter(isMore2));

function isOwnedByJonas(vehicle) {
  if (vehicle.ownedBy === "Jonas") {
    return true;
  }
}
// showTheseVehicles(vehicles.filter(isOwnedByJonas));

function Rugbroed(vehicle) {
  if (vehicle.fuel === "Rugbrød") {
    return true;
  }
}
// showTheseVehicles(vehicles.filter(Rugbroed));

function showTheseVehicles(arr) {
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td> 
  <td>${each.stops}</td>
  <td>${each.ownedBy}</td>
  <td>${each.isElectric}</td>
  <td>${each.isTandem}</td>
</tr>`;
  });
}

function clearTable() {
  tbodyPointer.innerHTML = "";
}

// Event listeners til knapperne
document.getElementById("showAllBtn").addEventListener("click", function () {
  clearTable();
  showTheseVehicles(vehicles);
});

document.getElementById("electricBtn").addEventListener("click", function () {
  clearTable();
  showTheseVehicles(vehicles.filter(erElektrisk));
});

document.getElementById("more2Btn").addEventListener("click", function () {
  clearTable();
  showTheseVehicles(vehicles.filter(isMore2));
});

document.getElementById("jonasBtn").addEventListener("click", function () {
  clearTable();
  showTheseVehicles(vehicles.filter(isOwnedByJonas));
});

document.getElementById("rugbroedBtn").addEventListener("click", function () {
  clearTable();
  showTheseVehicles(vehicles.filter(Rugbroed));
});
