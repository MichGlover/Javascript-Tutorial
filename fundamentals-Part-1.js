"use strict";

//VALUES AND VARIABLES

//variables are basically like boxes in which we can store values
let firstName = "Jonas";
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

//Variables in all uppercase are reserved for constants that we know will never change
let PI = 3.1415;

//Variables should be really descriptive
let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";
/**
 *
 *
 *
 *DATA TYPES DATA TYPES DATA TYPES
 *
 *
 */
//DATA TYPES 7(Number, String, Boolean, Undefined, Null, Symbol, Big Int)
// Javascript has dynamic typing which means we do not have to manually define the data type of the value stored in a variable. Data types are determined automatically

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof "Jonas");
console.log(typeof 23);

//reassigning a new value to an already existing variable
javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

//the value of year is undefined
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);
