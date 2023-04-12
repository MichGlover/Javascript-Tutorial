"use strict";

function logger() {
  console.log(`My name is Jonas`);
}

logger(); //calling / running / invoking the function

//fruitProcessor function has two parameters. They can be used in the function as variables
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

//we pass in some arguments to the fruitProcessor function
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
