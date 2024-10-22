// Last Step Question
// Question 1
// // What are the main differences between var, let, and const?
// Answer:
// Scope:
// var is function-scoped or globally scoped.
// let and const are block-scoped, meaning they are confined to the block where they are declared.
// Reassignment:
// var can be redeclared and reassigned.
// let can be reassigned but cannot be redeclared in the same scope.
// const cannot be reassigned or redeclared after its initial assignment.
// Hoisting:
// var is hoisted and initialized with undefined.
// let and const are hoisted but are in the temporal dead zone and not initialized, causing a ReferenceError if accessed before declaration.
var x = 5;
let y = 10;
const z = 15;
// Question 2
// When should you use var, let, or const?
const PI = 3.14;   // Use const for constants
let counter = 0;   // Use let for variables that change
var oldVar = "legacy"; // Avoid var, use it only when necessary
// Question 3
// Can you redeclare and update variables declared with var, let, and const?
var a = 10;
var a = 20; // Redeclaration allowed with var
a = 30;     // Updating allowed with var

let b = 10;
// let b = 20; // Error! Redeclaration not allowed with let
b = 20;     // Updating allowed with let

const c = 10;
// c = 20;   // Error! Reassignment not allowed with const
// Question 04
// What happens when you declare var, let, and const inside a block or loop?
if (true) {
    var x = 1;   // Accessible outside the block
    let y = 2;   // Block-scoped
    const z = 3; // Block-scoped
}
console.log(x); // Output: 1
console.log(y); // Error! y is not defined outside the block
console.log(z); // Error! z is not defined outside the block
// Question 05
// Why is const considered better for constants, and why should let be preferred over var?
// 1.const ensures that the value cannot be accidentally reassigned, making your code more predictable and less prone to bugs.
// 2.let is safer than var because it is block-scoped, avoids issues with redeclaration, and helps prevent errors related to hoisting.