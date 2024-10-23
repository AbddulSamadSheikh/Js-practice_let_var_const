let Name = prompt("Enter Your Name");

// Ensure the input is not null (if the user cancels the prompt)
if (Name !== null && Name !== "") {
    alert("Your name is " + Name); // Display the name in an alert box
    console.log("Your name is: " + Name); // Log the name to the console
} else {
    alert("You didn't enter a name.");
    console.log("No name entered.");
}

let age =Number (prompt("Enter the Age"));
console.log("Your are " +  age + " Years old");
let Room=Number( prompt("Enter Your Class"));
console.log("Your Class Number " + Room);
let phone=Number( prompt("Enter your Phone Number"));
console.log("Your Phone Number " + phone);
let Cell =Number( prompt("Enter your Cell Number"));
console.log("Your Cell Number " + Cell);
let Adress=( prompt("Enter Your Adress"));
console.log("Your Adress " + Adress);

let num1 =Number( prompt("Enter Your First Number"));
let num2 =Number( prompt("Enter Your Second Number"));

// Strings ko numbers mein convert karne ke liye parseInt ya parseFloat ka istemal karte hain
// num1 = parseFloat(num1);
// num2 = parseFloat(num2);

if(!isNaN(num1)&& !isNaN(num2)){
let sum = num1+num2;
alert(" Your Number " + sum);
console.log("This Is addition " + sum);

}else{
    alert("Your Number is not defined");
    console.log("Valid Number");
    
}