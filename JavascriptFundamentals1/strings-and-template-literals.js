"use strict";

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

const jonasNew = `My name is ${firstName} and I am a ${
  2037 - birthYear
} years old ${job}`;
console.log(jonas);
