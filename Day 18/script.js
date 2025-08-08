// 1 to 100 print
let i = 1;

while (i <= 100) {
  console.log(i);
  i++;
}

// Sum of 1 to 100 print
let sum = 0;
i = 1;

while (i <= 100) {
  sum = sum + i;
  i++;
}

console.log("Sum is : ", sum);

// Do while Loop
i = 0;
do {
  console.log("Aarush ", i);
  i++;
} while (i <= 100);

let prices = [100, 200, 300];
console.log(prices.length);
console.log(prices[0]);
console.log(prices[1]);
console.log(prices[2]);

let amount = 0;
for (let i = 0; i < prices.length; i++) {
  amount = amount + prices[i];
}
console.log("Your total cart price is : ", amount);

let fruits = ["apple", "orange"];
prices = [100, 200];

for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit Name", fruits[i], "and the price of it is : ", prices[i]);
}

let friends = ["Rahul", "Manas", "Ankit"];
let marks = [
  [10, 20],
  [20, 10],
  [20, 20],
];

// Homework
// 1. Practice While loop and Do while loop
// 2. Complete previous homework
