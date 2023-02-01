"use strict";

//5 falsy values: 0, " ", undefined, null, NaN

//javascript tries to coerce the value into a boolean. Since 0 is falsy it is converted to false
const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job");
}

let height = 0;
if (height || height === 0) {
  console.log("Height is defined");
} else {
  console.log("Height is undefined");
}
