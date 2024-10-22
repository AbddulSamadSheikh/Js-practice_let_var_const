// Step 02

// Question 01
// What is let in JavaScript?
let x = 10;
console.log(x); // Output: 10

// Question 02
// What is block scope, and how does let behave in block scope?
if (true){
    let y=20;
    console.log(y)  // Output: 20
}
console.log(y);   // let.js:14 Uncaught ReferenceError: y is not defined

// Question 03
// Can a let variable be redeclared?
let name = "Alice";
let name = "Bob"; // Error! Cannot redeclare 'name'

// Question 04
// Can a let variable be updated?
let count = 5;
count = 10; // Updating the value
console.log(count); // Output: 10

// Question 05
// Is let hoisted like var?
console.log(a); // ReferenceError! Cannot access 'a' before initialization
let a = 5;

// Question 06
// What happens when you declare a let variable in a loop?
for (let i = 0; i < 3; i++) {
    console.log(i); // Output: 0, 1, 2
}
console.log(i); // Error! i is not defined outside the loop

// Question 07
// What are the advantages of using let over var?
// Answer:
// Block Scope: let is block-scoped, which prevents accidental access to variables outside the intended block.
// No Redeclaration: let helps avoid bugs by not allowing redeclaration in the same scope.
// Temporal Dead Zone: let helps avoid bugs by ensuring variables are initialized before they are accessed.


// Question 08
// Can let variables be declared without initialization?
let num;
console.log(num); // Output: undefined
num = 10;
console.log(num); // Output: 10

// Question 09
// What happens if you redeclare a let variable in a different block?
let color = "red";
{
    let color = "blue"; // Allowed, because it's a different block
    console.log(color); // Output: blue
}
console.log(color); // Output: red