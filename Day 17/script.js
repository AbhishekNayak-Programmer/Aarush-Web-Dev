let age = 10;

switch (age) {
  case 10: {
    console.log("Age is 10");
    break;
  }

  case 18: {
    console.log("Age is 18");
    break;
  }

  case 20: {
    console.log("Age is 20");
    break;
  }

  default: {
    console.log("Nothing Matched! So I am printed");
  }
}

// FOR LOOP
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

for (let i = 10; i >= 0; i -= 2) {
  console.log(i);
}

let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}

console.log(sum);

// 5! = 5 * 4 * 3 * 2 * 1 - Factorial of a Number
let fact = 1;
for (let i = 5; i > 0; i--) {
  fact *= i;
}

console.log(fact);

console.log(5 % 2);
console.log(4 % 2);

// Prime Number
let num = 17,
  divisibleCount = 0;

for (let i = 2; i <= 16; i++) {
  if (num % i === 0) divisibleCount = divisibleCount + 1;
}

if (divisibleCount > 0) console.log("Not a prime number");
else console.log("Prime Number");

// Break and Continue
for (let i = 1; i < 10; i++) {
  if (i === 6) break;
  console.log(i);
}

for (let i = 1; i < 10; i++) {
  if (i === 6) continue;
  console.log(i);
}

// Homeworks
// 1. Write a good example and real world use of Switch Case
// 2. Write a program to print Factorial of a number (3 * 2 * 1)
// 3. Practice break and continue with some examples
