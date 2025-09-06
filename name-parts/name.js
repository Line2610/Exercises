"use strict";

const fullName = "Peter Heronimous Lind";

const firstSpace = fullName.indexOf(" ");
const lastSpace = fullName.lastIndexOf(" ");

const firstName = fullName.substring(0, firstSpace);
const middleName = fullName.substring(firstSpace + 1, lastSpace);
const lastName = fullName.substring(lastSpace + 1);

console.log(firstName); // "Peter"
console.log(middleName); // "Heronimous"
console.log(lastName); // "Lind"
