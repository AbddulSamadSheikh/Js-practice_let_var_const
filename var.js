// step 01

// Question 01
// How is var used to declare a variable And // Can you redeclare a var variable?

var ID = "abdul";
var ID = "samad"; // No error, city is redeclared
console.log(ID); // Output: "samad"

// Question 02
// Does var have block scope?
if (true) {
  var massage = "Hello World";
}
console.log(massage); // Output: "Hello"

// Question 03
// What happens when you use var without initialization?
var test; // Declared but not initialized
console.log(test); // Output: undefined

// Question 04
// Can a var variable be updated?
var count = 10;
count = 20; // Updating the value of count
console.log(count); // Output: 20

// Question 05
// What happens when you declare a var variable globally?
var globalvar = "I am a globalvar";
console.log(window.globalvar); // Output: "I'm global!"

// Question 06
// Is var hoisted in JavaScript?
console.log(a); // Output: undefined (because only declaration is hoisted)
var a = 5;

// Question 07
// What happens if you use var inside a loop?
for (var i = 0; i < 5; i++) {
  // Loop code
}
console.log(i); // Output: 5 (i is accessible outside the loop)
// Question 08
// What are the major drawbacks of using var?
// Answer:
// No Block Scope: Variables declared with var can cause issues when used in loops or blocks because they are function-scoped, not block-scoped.
// Hoisting Confusion: var variables are hoisted but initialized with undefined, which can lead to bugs if you try to use them before they are assigned a value.
// Redeclaration Allowed: var allows redeclaration within the same scope, which can lead to unintentional overwriting of variables.
// These drawbacks are why newer keywords like let and const were introduced in JavaScript (ES6).
