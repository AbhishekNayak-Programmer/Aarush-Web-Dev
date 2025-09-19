const btn = document.querySelector(".btn");

// alert("Good Morning");

btn.addEventListener("click", () => {
  let name = prompt("Enter your name");
  let age = prompt("Enter your age");
  alert(`Hi, ${name} your age is ${age}`);
  let res = confirm("Did you want to continue?");
  if (res === true) {
    alert("Thanks for continuing");
  } else {
    alert("Better luck next time!");
  }
});

const btn2 = document.querySelector(".btn2");
btn2.addEventListener("dblclick", () => {
  alert("Double clicked this button");
});

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((result) => console.log(result));

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
};

// getPosts();

const option = prompt(
  "Please choose from the following - photos, posts, albums, users, comments, todos"
);

const getData = async (selected_option) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/${selected_option}`
  );
  const data = await res.json();
  console.log(data);
};

getData(option);
