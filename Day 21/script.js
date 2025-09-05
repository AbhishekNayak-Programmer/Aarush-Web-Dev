const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
};

console.log(isPrime(13));
console.log(isPrime(14));

const checkPalindrome = (text) => {
  return text.split("").reverse().join("") === text;
};

console.log(checkPalindrome("madam"));
console.log(checkPalindrome("Adarsh"));

// Map, Filter, Reduce

let arr = [1, 2, 3];

// Simple Method / Old Method
let ans = [];
for (let i = 0; i < arr.length; i++) {
  ans.push(arr[i] * 2);
}
console.log(ans);

// Advanced Method
let answer = arr.map((el, ind) => el * 2);
console.log(answer);

const products = [
  { name: "Shirt", price: 2000 },
  { name: "Tablet", price: 100000 },
  { name: "Mobile", price: 50000 },
  { name: "Car", price: 1000000 },
  { name: "Bike", price: 50000 },
];

// Simple Methods / Old Method
ans = [];
for (let i = 0; i < products.length; i++) {
  if (products[i].price <= 50000) ans.push(products[i]);
}
console.log(ans);

// Advanced Method
answer = products.filter((el, ind) => el.price <= 50000);
console.log(answer);

let prices = [23, 56, 678, 578, 8765, 98, 4567];
let totalPrice = 0;

// Simple Methods / Old Method
for (let i = 0; i < prices.length; i++) {
  totalPrice = totalPrice + prices[i];
}

console.log(totalPrice);

// Advanced Method
totalPrice = prices.reduce((acc, el, ind) => (acc += el), 0);
console.log(totalPrice);

// Homework
// 1. List all the book names, Find all books published after 2015
const library = {
  name: "Tech Central Library",
  location: {
    city: "Hyderabad",
    pincode: "500032",
    address: "5th Floor, Innovation Tower",
  },
  isOpen: true,
  sections: [
    {
      name: "Programming",
      books: [
        {
          title: "JavaScript: The Good Parts",
          author: "Douglas Crockford",
          year: 2008,
          copies: 2,
          genres: ["coding", "web"],
        },
        {
          title: "Eloquent JavaScript",
          author: "Marijn Haverbeke",
          year: 2018,
          copies: 5,
          genres: ["coding", "web", "beginner"],
        },
      ],
    },
    {
      name: "Data Science",
      books: [
        {
          title: "Python Data Science Handbook",
          author: "Jake VanderPlas",
          year: 2016,
          copies: 4,
          genres: ["python", "data"],
        },
        {
          title: "Hands-On Machine Learning",
          author: "Aurelien Geron",
          year: 2022,
          copies: 3,
          genres: ["ml", "python"],
        },
      ],
    },
    {
      name: "Fiction",
      books: [
        {
          title: "The Martian",
          author: "Andy Weir",
          year: 2014,
          copies: 7,
          genres: ["fiction", "science"],
        },
        {
          title: "The Alchemist",
          author: "Paulo Coelho",
          year: 1988,
          copies: 6,
          genres: ["fiction", "life lesson"],
        },
      ],
    },
  ],
  staff: [
    { name: "Ravi", role: "Manager", yearsEmployed: 5 },
    { name: "Sneha", role: "Assistant", yearsEmployed: 2 },
    { name: "Ali", role: "Technician", yearsEmployed: 3 },
  ],
  reviews: [
    { user: "Suresh", rating: 5, comment: "Great selection of tech books!" },
    { user: "Nikita", rating: 4, comment: "Friendly staff." },
    { user: "Manoj", rating: 5, comment: "Excellent ambience." },
  ],
  getOpenStatus: function () {
    return this.isOpen ? "Open" : "Closed";
  },
};
