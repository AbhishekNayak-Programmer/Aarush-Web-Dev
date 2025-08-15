// Array Methods
let arr = [];

// Insert from End
arr.push("Abhishek");
arr.push("Aarush");
arr.push(100);

// Insert from Start
arr.unshift("Rahul");
arr.unshift(203456);

// Remove from End
arr.pop();

// Remove from Start
arr.shift();
arr.shift();

console.log(arr);

// Reverse the array
arr = arr.reverse();
console.log(arr);

let myArr = ["Apple", "Orange", 23903, 3456, "Aarush", 9930];
myArr = myArr.reverse();
console.log(myArr);

// Slice the array
myArr = ["Apple", "Orange", 23903, 3456, "Aarush", 9930];
console.log(myArr);
console.log(myArr.slice(0, 3));
console.log(myArr.slice(2));
console.log(myArr.slice(2, 5));
console.log(myArr);

// Length of the Array
console.log(myArr.length);

// Delete all in array
myArr.length = 0;
console.log(myArr);

// Includes Method
arr = ["Abhishek", "Aarush", "Adarsh", "Pooja"];
console.log(arr.includes("Abhishek"));
console.log(arr.includes("aarush"));

// Index Of Method
console.log(arr.indexOf("Adarsh"));
console.log(arr.indexOf("Pooja"));

// Splice Method
arr = ["Abhishek", "Aarush", "Adarsh", "Pooja", "Rina"];
console.log(arr);
arr.splice(3, 1);
console.log(arr);

// Sorting in Array
arr = ["Adarsh", "Pooja", "Abhishek", "Aarush", "Rina"];
arr.sort();
console.log(arr);

arr = [1, 2, 3, 45, 345, 7, 2, 23];
console.log(arr.sort((a, b) => a - b));
console.log(arr.sort((a, b) => b - a));

// Slice Method using For Loop
arr = ["Abhishek", "Adarsh", "Aarush", "Rina"];
for (let i = 0; i < arr.length; i++) {
  if (i < 2) continue;
  console.log(arr[i]);
}

// Includes Method using For Loop
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "Abhishek") console.log("Abhishek is found");
}

// Homework
// 1. Implement includes method using for Loop
// 2. Find Index of a string inside a array using for Loop
