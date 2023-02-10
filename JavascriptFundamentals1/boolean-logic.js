"use strict";

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log(`Sarah is able to drive`);
// } else {
//   console.log(`Someone else should drive`);
// }

const isTired = false;

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log(`Sarah is able to drive`);
} else {
  console.log(`Someone ele should drive`);
}
