"use strict";

const age = 9;

if (age >= 18) {
  console.log(`You grow papa`);
} else {
  const yearsleft = 18 - age;
  console.log(`Sarah is too young, wait another ${yearsleft} years`);
}

console.log(`${age}`);

let century;
const birthYear = 1991;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
