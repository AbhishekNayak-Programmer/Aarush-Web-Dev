console.log(document);

let box = document.getElementsByClassName("box");
console.log(box);

let aarush = document.getElementById("aarush");
console.log(aarush);

let a = document.querySelector("#aarush");
console.log(a);

let b = document.querySelector(".box");
console.log(b);

let allItems = document.querySelectorAll(".item");
console.log(allItems);

let num = 24;
num = "Abhishek Nayak";
num = [1, 2, 3, 4, 5];
num = true;

// (+=, -=, *=, /=)
let sum = 15;
sum += 15; // sum = sum + 15;
console.log(sum);

sum -= 20; // sum = sum - 20;
console.log(sum);

sum *= 4; // sum = sum * 4;
console.log(sum);

sum /= 4; // sum = sum / 4;
console.log(sum);

// (>=, >, <, <=, ==, ===)

a = 5;
b = 20;

console.log(a >= b);
console.log(a < b);
console.log(a > b);
console.log(a <= b);

console.log(5 === 5);
console.log(5 === "5");

console.log(5 == 5);
console.log(5 == "5");

let age = 26;
if (age >= 18) {
  console.log("You are eligible to drive");
} else console.log("Not eligible to drive");

let number = -20;
if (number === 0) {
  console.log("The Number is 0");
} else if (number > 0) {
  console.log("The Number is a +ve Number");
} else {
  console.log("The Number is a -ve Number");
}
