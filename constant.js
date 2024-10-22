// Step 03
// Question 01   What is const in JavaScript?
const pi = 3.14;
console.log(pi); // Output: 3.14

// Question 02    // Can a const variable be updated or reassigned?
const number = 10;
number = 20; // Error! Assignment to constant variable is not allowed

const person = { name: "Alice" };
person.name = "Bob"; // Allowed, you can change the properties of the object
console.log(person.name); // Output: Bob

// Question 03 Is const block-scoped?
if (true) {
    const city = "New York";
    console.log(city); // Output: New York
}
console.log(city);
// Question 04  Can you declare a const variable without initialization?
const age; // Error! Missing initializer in const declaration

// Question 05 
// Can a const variable be hoisted?
console.log(a); // ReferenceError! Cannot access 'a' before initialization
const a = 5;

// Question 06 
// What happens when you declare objects or arrays with const?
const arr = [1, 2, 3];
arr.push(4); // Allowed, you can modify the array
console.log(arr); // Output: [1, 2, 3, 4]

arr = [5, 6, 7]; // Error! Assignment to constant variable is not allowed

// Question 07
// Why should you use const in JavaScript?
const maxValue = 100;
maxValue = 200; // Error! This ensures the value doesn't accidentally change

// Question 08
// What happens if you use const in a loop?
for (const i = 0; i < 3; i++) {
    console.log(i); // Error! Reassignment not allowed for const in loops
}

// And 
const arr = [10, 20, 30];
for (const value of arr) {
    console.log(value); // Output: 10, 20, 30 (works fine with no reassignment)
}
// Question 09
// Is it good practice to always use const?
const pi = 3.14159;  // Use const for values that won't change
let count = 0;       // Use let for values that can change

// Question 10
// What are the advantages of using const over let and var?

// 1 .Ensures Immutability: const helps prevent reassignment, making your code more predictable.
// 2. Block Scope: Like let, const is block-scoped, ensuring that the variable doesn't leak outside its intended scope.
// 3. Clearer Intent: Using const makes it clear to other developers that the variable's value should not be changed.