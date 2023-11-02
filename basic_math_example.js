//---------------------------------------
// Basic Math Demo 
//
// Author: Ryan Thompson
//
// Basic JavaScript(JS) math functions to
// demonstrate the basic usage of JS and
// nodejs via the bash terminal.
//
// Usage:
//     $ node basic_math_example.js
//---------------------------------------


// Declaring output variables.
var add_output;
var minus_output;
var multiply_output;
var divide_output;


//-------------------------------
// Addition function
//
// Adds up the parameters and 
// returns the final value.
//-------------------------------
function sum(a, b) {
    var retVal = a + b;
    return retVal;
}

//-------------------------------
// Minus function
//
// Subtracts the parameters and 
// returns the final value.
//-------------------------------
function minus(a, b) {
    var retVal = a - b;
    return retVal;
}

//-------------------------------
// Multiplication function
//
// Multiplies the parameters and 
// returns the final value.
//-------------------------------
function multiply(a, b) {
    var product = a * b;
    return product;
}

//-------------------------------
// Division function
//
// Divides the parameters and 
// returns the final value.
//-------------------------------
function divide(a, b) {
    var product = a / b;
    return product;
}

//-------------------------------
// Printing Machine
//
// Takes in output parameters
// to be printed to console with
// their respective function
// association. 
//
// w : addition output
// x : minus output
// y : multiplication output
// z : division output
//-------------------------------
function printer(w,x,y,z) {
    console.log("\n");
    console.log("Printing outputs...");
    console.log("1 + 2 = " + w);
    console.log("1 - 2 = " + x);
    console.log("1 * 2 = " + y);
    console.log("1 / 2 = " + z);
    console.log("\n");
}

//-------------------------------
// Addition function
//
// Adds up the parameters and 
// returns the final value.
//-------------------------------
function main() {
    // Grabbing the value from the basic 
    // math functions and assigning to 
    // respective variables.
    add_output = sum(1,2);
    minus_output = minus(1,2);
    multiply_output = multiply(1,2);
    divide_output = divide(1,2);

    //Printing the outputs to console.
    printer(add_output, minus_output, multiply_output, divide_output);
}

// Pushing the big red button.
main()

