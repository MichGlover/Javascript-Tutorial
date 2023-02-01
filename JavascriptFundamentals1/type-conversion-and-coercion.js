"use strict";

//TYPE CONVERSION(manuall converting from one type to another)
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

//Trying to convert a value which isn't a number will give you Nan
console.log(Number("Jonas"));

//TYPE COERCION
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" > "18");

//the plus operator concatenates a string and a number with the + operator but converts the string to a number with the - operator or * operator or > < operator
let n = "1" + 1;
n = n - 1;
console.log(n);
