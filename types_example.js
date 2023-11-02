//---------------------------------------
// JavaScript Number Types Demo 
//
// Author: Ryan Thompson
//
// Quick demonstration of number data 
// types in the programming language of 
// JS.
//
// Prerequisite:
//   The JS underscore-contrib package 
//   for specific integer and float data 
//   type checking.
//   To install:
//      $ npm install underscore-contrib
//
// Usage:
//     $ node types_example.js
//---------------------------------------


// // Importing the required integer/float 
// // type checking package.
// // 
// // This does run in onyx due to not being
// // to install new packages???
// //
// // Commented out due to lack of support on onyx.
// var number_type_checker = require('underscore-contrib');


// --------------------------------------
// Not A Number Check.
// 
// Using the isNaN function, the given 
// data is checked to see whether or not
// it is a number. 
//
// The isNaN function has an odd part 
// where whitespace is considered a 
// number! This function demonstrates 
// that odd part of isNaN.
//
// The isNaN function returns true if the
// given data is not a number. Otherwise
// the isNaN function returns false if
// the given data is a number.
// --------------------------------------
function not_num_check() {
    // Variables to test with isNaN.
    var w = "hello world";
    var x = "42";
    var y = 42.0;
    var z = 42;

    // Logging isNaN results.
    console.log("\n");
    console.log("Checking for numbers with isNaN function...");
    console.log("\tWhitespace is not a number?: " + isNaN(" "));
    console.log("\tWhitespace is considered a number???: " + !isNaN(" "));
    console.log("\tvar w is not a number with the value " + w + ": " + isNaN(w));
    console.log("\tvar x is not a number with the value " + x + ": " + isNaN(x));
    console.log("\tvar y is not a number with the value " + y + ": " + isNaN(y));
    console.log("\tvar z is not a number with the value " + z + ": " + isNaN(z));
}

// --------------------------------------
// Demonstrates how standard JS simply 
// checks for a number whether the 
// number is an integer or a float.
// 
// Outputs results to console.
// --------------------------------------
function simple_number_check() {
    var x = 42;
    var y = 42.5;
    console.log("\n"); // Cause whitespace helps me read within the console/terminal.
    console.log("Using JS typeof() function...")
    console.log("\tvariable x is a " + typeof(x) + " with the value of " + x);
    console.log("\tvariable y is a " + typeof(y) + " with the value of " + y);
}


// //------------------------------------------
// // Commented out the rest of this file 
// // to make sure this file runs on onyx.
// // Uncomment if...
// //   $ npm install underscore-contrib
// // Also will have to uncomment function 
// // in the main function.
// //------------------------------------------

// // --------------------------------------
// // Uses the underscore-contrib package in
// // to check for float data types.
// //
// // Outputs whether or not the given data
// // is a float or not to console.
// // --------------------------------------
// function float_type() {
//     var x = 42.42;
//     var x_is_float = number_type_checker.isFloat(x);
//     if(x_is_float) {
//         console.log("\t" + x + " is a float data type");
//     }
//     else {
//         console.log("\t" + x + " is not a float data type");
//     }
// }

// // --------------------------------------
// // Uses the underscore-contrib package in
// // to check for integer data types.
// //
// // Outputs whether or not the given data
// // is an integer or not to console.
// // --------------------------------------
// function int_type() {
//     var x = 42;
//     var x_is_integer = number_type_checker.isInteger(x);
//     if(x_is_integer) {
//         console.log("\t" + x + " is an integer data type");
//     }
//     else {
//         console.log("\t" + x + " is not an integer data type");
//     }
// }

// // --------------------------------------
// // Driver function for the int_type() 
// // function and the float_type()
// //
// // Outputs the respective results from 
// // each function. 
// // --------------------------------------
// function better_num_check() {
//     console.log("\n");
//     console.log("Using JS underscore-contrib package...");
//     int_type();
//     float_type();
// }

// // --------------------------------------
// // Demonstrates how certain floats can 
// // still be considered an integer. A 
// // float with only decimal digits of 0 
// // will be considered an integer.
// //
// // For example 1.0 will be considered an
// // integer, while 1.0001 will be 
// // considered a float
// // --------------------------------------
// function decimal_zero_exception() {
//     var y = 42.0;
//     console.log("\n");
//     console.log("Decimal values of only zero...");
//     console.log("\t42.0 is considered a float?:\t" + number_type_checker.isFloat(y)); 
//     console.log("\t42.0 is considered an integer?:\t" + number_type_checker.isInteger(y));
// }



// --------------------------------------
// Main driver function to run this 
// numbers type example code.
// --------------------------------------
function main() {
    not_num_check();
    simple_number_check();
    // better_num_check();
    // decimal_zero_exception();
}

// Pushing the big red button.
main();