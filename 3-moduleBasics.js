//Modules
// Common Js, every file is module by default
// Modules - Encapsulated Code(Only share minimum)

const names = require('./4-names');
// const {john,peter} =  require('./4-names');
const sayHi = require('./5-utils');
const alternativeexportdata = require('./6-alternative-exports');
//console.log(alternativeexportdata);
//We imported files from various modules, and executed in this file.4

require('./7-exporting-without-export');
//We are just import the function without export function not being used in 7-exporting-without-export.js file
//We also didnot use any function callback to execute the functions as it is alreay called in the 7-exporting-without-export.js file.

sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);


//This file is moduleBasics.js then we use modules to make the code easier