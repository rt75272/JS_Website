// --------------------------------------
// JavaScript Arguments
//
// Author: Ryan Thompson
//
// Demonstrates the usage of terminal
// arguments using JavaScript and Nodejs
// via bash. Takes in integer value 
// arguments to be feed into the 
// summation function. If no arguments
// are given, the default array of 
// integer numbers will be used. Only
// integer value are supported.
// 
//
// Usage:
//   There must be a space between args
//   $ node cmd_arg_example.js <int_0,...,int_n>
//   
//   Usage example:
//   $ node cmd_arg_example.js 1 5 15 9 
// --------------------------------------


// --------------------------------------
// Determines if arguments were given. If
// no arguments were given, defaults to 
// the starting array values of 
// [1,1,2,3,5,8].
// 
// Returns an array of integers with the 
// variable of sigma_numbers.
// --------------------------------------
function init() {
    var args = process.argv.slice(2); // array of args. user given cmd args starts at index 2
    var num_args = args.length; // number of args given
    var sigma_numbers = [1,1,2,3,5,8];
    
    console.log("Numbers of arguments found: " + num_args);
    if(num_args == 0) {
        console.log("No args were given, using default number array to run demonstration");
    }
    else {
        sigma_numbers = args;
    }
    return sigma_numbers;
}


// --------------------------------------
// Standard sigma function to add up the 
// given integers in and array.
// --------------------------------------
function summation(sigma_num, n) {
    var retVal = 0;
    for(var i = 0; i < n; i++) {
        if(isNaN(sigma_num[i])) {
            console.log("Argument at index " + i + " is not a number");
        }
        else {
            retVal += parseInt(sigma_num[i]);
        }
    }
    return retVal;
}

// --------------------------------------
// Main driver function for this file. 
// --------------------------------------
function main() {
    var sigma_numbers = init();
    sigma_length = sigma_numbers.length; 
    console.log(summation(sigma_numbers, sigma_length));
}

// Pushing the big red button
main()