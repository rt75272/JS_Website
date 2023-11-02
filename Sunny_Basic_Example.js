//Author: Sunny MOran
//Basic Example
//Odd vs Even Function
function foo(digit) {
  let number = digit;

  if(number % 2 == 0){
    console.log("The selected digit is even");
  }
  else{
    console.log("The selected digit is odd");
  }

}
let exampleOdd = new foo(5);
let exampleEven = new foo(14);

