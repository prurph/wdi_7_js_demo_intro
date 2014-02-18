// Pops up an alert
// alert("Hi")

// Print to console
console.log("Apply directly to the console");

// Prompt gets a value from user input
var name = prompt("Your name");

// Use === to avoid typecasting in comparisons
1 ==  '1' // true
1 === '1' // false

// Frown upon auto-incrementing operators
var x = 0;
++x;
x++;
x += 1;

x = x + 1;  // Best to be very rigorous about using long form

// Basic Datatypes
var name = "David";
var age = 31;
var awesome = true;

// Arrays are "object" datatype
var colors = ["red", "green", "blue"];

// Array methods
colors.push("purple"); // returns 4 (length of array)
colors.pop(); // MUST invoke methods with (), even if no arguments

var heightInInches = prompt("How tall are you?");
if (heightInInches >= 60) {
  console.log("You may ride");
} else {
  console.log("Come back in a few years");
}

var holyNumber = prompt("What number did you count to?");
if (holyNumber > 3) {
  console.log("Four shalt thou not count. Five is right out.");
} else if (holyNumber < 3) {
  console.log("Neither count thou two or one, excepting that thou then count to three.");
} else {
  console.log("Throw the holy hand grenade.");
}
