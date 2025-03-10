/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
console.log("The result is: " + result);

let isValid = Boolean(""); //change to empty string to make isValid false
if (isValid) {
    console.log("This is valid!");
}
else 
    console.log("This is invalid!");

let age = "25";
let totalAge = Number(age) + 5; //explicit conversion to a number so it doesn't concatenate the 5 and actually does addition
console.log("Total Age: " + totalAge);


let digitOne = 5;
let digitTwo = "4";
let sum = digitOne + Number(digitTwo); //explicit conversion
console.log(sum);

let digitThree = 9;
let digitFour = "6"; 
let difference =  digitThree - digitFour; //implicit conversion
console.log(difference);