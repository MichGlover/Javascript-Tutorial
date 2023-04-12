"use strict";

//Arrow functions are a form of function expresions that are simpler and shorter to write

//Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

const yearsLeft = yearsUntilRetirement(1991, "Jonas");
console.log(yearsLeft);

//NB Arrow functions do not get a 'this' keyword
