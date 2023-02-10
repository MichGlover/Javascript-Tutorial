"use strict";

const age = 18;
//strict equality operator
if (age === 18) console.log(`You just became an adult`);

//loose equality operator
if (age == 18) console.log(`You just became an adult`);

const favourite = Number(prompt(`What is your favorite number`));
console.log(favourite, typeof favourite);

if (favourite === 23) {
  console.log(`Cool! 23 is an amazing number`);
} else if (favourite === 7) {
  console.log(`7 is also a cool number`);
} else if (favourite === 9) {
  console.log(`9 is a cool number`);
} else {
  console.log(`Number is not 23 or 7`);
}

//Not equal to or different from operator
if (favourite !== 23) {
  console.log(`Why not 23`);
}
