let box = document.getElementsByClassName("box");
// console.log(box);

box[0].addEventListener("click", function () {
  console.log("I am clicked 1");
});

box[1].addEventListener("click", function () {
  console.log("I am clicked 2");
});

let container = document.getElementById("container");
container.addEventListener("click", function () {
  console.log("Container Clicked");
});

container.addEventListener("mouseover", function () {
  container.style.background = "blue";
  container.style.display = "flex";
  container.style.alignItems = "center";
  container.style.justifyContent = "center";
  container.style.textAlign = "center";
  container.style.borderRadius = "50%";
  container.style.transition = "all 1s ease";
  container.innerText = "Your mouse is over the container";
});

container.addEventListener("mouseout", function () {
  container.style.background = "yellowgreen";
  container.style.display = "flex";
  container.style.alignItems = "center";
  container.style.justifyContent = "center";
  container.style.textAlign = "center";
  container.style.borderRadius = "0%";
  container.innerText = "Your mouse gone outside the container";
});

const nameContainer = document.getElementById("name");

document.addEventListener("keydown", function (event) {
  console.log(event.key);
  if (event.key === "Enter") {
    nameContainer.classList.add("addme");
  }

  if (event.key === "j") {
    container.classList.add("addme2");
  }

  if (event.key === "r") {
    container.classList.remove("text");
  }
});

// Homework
// 1. Use keyup event to apply dynamic classes to the HTML elements
// 2. Use toggling effect of a class in any element of HTML
