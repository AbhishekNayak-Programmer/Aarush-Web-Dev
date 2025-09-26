const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const myinput = document.querySelector(".myinput");
const dynamic_content = document.querySelector(".dynamic_content");

let html = "<h1>Abhishek Nayak</h1>";

let html2 = `<h1>Abhishek Nayak</h1>
            <p>Software Engineer</p>
            <input type="number" placeholder="enter your number">`;

btn.addEventListener("click", function () {
  //   container.insertAdjacentHTML("afterbegin", html2);
  //   container.insertAdjacentHTML("beforebegin", html2);
  //   container.insertAdjacentHTML("beforeend", html2);
  container.insertAdjacentHTML("afterend", html2);
});

myinput.addEventListener("keydown", function (event) {
  //   console.log(event.target.value);
  dynamic_content.innerText = event.target.value;
});

// Working with Date and Time
const time = document.querySelector(".time");
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    time.innerText = new Date();
  }
});

console.log(new Date());
console.log(new Date().toLocaleDateString());

const current_time = document.querySelector(".current_time");

setInterval(() => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const d = date.getDate();
  const day = date.getDay();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  // console.log(year, month + 1, hour, min, sec);

  current_time.innerText = `Date : ${d}/${
    month + 1
  }/${year}  Time : ${hour}:${min}:${sec}`;
}, 10000);

setTimeout(() => {
  console.log("3 seconds completed");
}, 3000);
