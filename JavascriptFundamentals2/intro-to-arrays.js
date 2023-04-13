"use strict";

//Arrays are like big containers into which we can throw variables and later access them
const friends = ["Michael", "Steven", "Peter"];

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);

//getting the last element in the array
console.log(friends[friends.length - 1]);

//mutating the friends array
friends[2] = "Jay";

const firstName = "Jonas";
const jonas = [firstName, "Schmedtman", 2037 - 1991, "teacher", friends];
console.log(jonas);

//Exercise
const calculateAge = (birthYear) => 2037 - birthYear;
const years = [1990, 1967, 2002, 2010, 2018];

const ages = [
  calculateAge(years[0]),
  calculateAge(years[1]),
  calculateAge(years[years.length - 1]),
];
console.log(ages);
