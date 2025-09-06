"use strict";

// const name = "peter";
// const result =
//   name.substring(0, 2).toLowerCase() + // "pe"
//   name.substring(2, 3).toUpperCase() + // "T"
//   name.substring(3).toLowerCase(); // "er"

// console.log(result); // peTer

const name = "peter";

const result =
  name.substring(0, 1).toLowerCase() + // "p"
  name.substring(1, 3).toUpperCase() + // "ET"
  name.substring(3).toLowerCase(); // "er"

console.log(result); // pETer
