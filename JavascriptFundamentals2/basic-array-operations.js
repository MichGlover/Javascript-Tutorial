"use strict";

//push method adds elements to the end of the array
const myFriends = ["Michael", "Steven", "Peter"];
myFriends.push("Jay");
console.log(myFriends);

//NB: Push method returns the length of the array

//unshift add element to the front of the array
myFriends.unshift("John");
console.log(myFriends);

//NB: Unshift methods return the new length of the array

//Remove elements from an array
myFriends.pop();
console.log(myFriends);

//NB: Pop method returns the removed element "Jay"

//Remove element from the beginning of the array
myFriends.shift();
console.log(myFriends);

//FINDING THE INDEX OF AN ELEMENT
console.log(myFriends.indexOf("Steven")); //returns -1 if we pass in an element that doesnt exist in the array

//includes returns true if element is in the array and false if it is not
//includes does not do type coercion. It uses strict equality operator
console.log(myFriends.includes("Steven"));

if (myFriends.includes("Peter")) {
  console.log("You have a friend called Peter");
}
