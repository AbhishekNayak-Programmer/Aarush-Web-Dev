const aarushDetails = ["Aarush", "7", "Computer Hardware Engineer", "USA"];

let person = {
  name: "Aarush",
  class: 7,
  dream: "Computer Hardware Engineer",
  city: "USA",
};

console.log(person);
person = { ...person, age: 12 };
console.log(person);
person.class = 8;
console.log(person);
delete person.city;
console.log(person);

console.log(typeof 90);
console.log(typeof "Abhishek");
console.log(typeof true);
console.log(typeof person);
console.log(Array.isArray(aarushDetails)); // Way to check arrays

// GATE
// AND - &&
// T T = T
// T F = F
// F T = F
// F F = F

// 18 years and he has a job then he can go to trip
let aarushAge = 18,
  hasJob = true;

if (aarushAge >= 18 && hasJob === true) {
  console.log("Allowed for trip");
} else console.log("Not allowed");

// OR - ||
// T T = T
// T F = T
// F T = T
// F F = F

if (aarushAge >= 19 || hasJob === true) {
  console.log("Allowed for trip");
} else console.log("Not allowed");

// NOT - ~
// 1 - 0
// 0 - 1
console.log(~false);

// Function Declarations
function greet(name) {
  console.log("Good Morning", name);
}

greet("Abhishek");
greet("Aarush");

// Function Expression
const greet2 = function (name) {
  console.log("Good Morning", name);
};

greet2("Abhishek");
greet2("Aarush");

// Arrow Function
const greet3 = (name) => {
  console.log("Good Morning", name);
};

greet3("Abhishek");
greet3("Aarush");

// Arguments in Functions
// 1. Sum of N Numbers
const sumOfN = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++) sum = sum + args[i];
  console.log(sum);
};

sumOfN(1, 2);
sumOfN(1, 2, 3);
sumOfN(1, 2, 3, 4, 5, 6);

// Homework
// 1. Write a function which will take any n integers and sort it (ascending order) and print in console
// 2. Create a Object of your choice and try manipulating the key and values of the object
// 3. Write a arrow Function to find the number is a prime number or not
// 4. Write a Function expression to find the string is a palindrome or not
