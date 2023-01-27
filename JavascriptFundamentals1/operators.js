"use strict";

//MATHEMATICAL OPERATORS
const now = 2037;

const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Scmedtmann";
console.log(firstName + " " + lastName);

//ASSIGNMENT OPERATORS
let x = 10 + 5; //Assignment operator (=) 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4;
x++; // x = x + 1
x--; //x = x - 1;
x--;
console.log(x);

//COMPARISON OPERATORS
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

//OPERATOR PRECEDENCE
let y, z;
y = z = 25 - 10 - 5; // y = z = 10, y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(averageAge);
