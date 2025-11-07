// let box = document.querySelector("p");

// let button = document.querySelector("button");
// let offButton = document.querySelector(".offButton");

// button.addEventListener("click", () => {
//   console.log("button cicked");
//   box.style.backgroundColor = "yellow";
// });

// offButton.addEventListener("click", () => {
//   box.style.backgroundColor = "white";
// });


// acha us par animation agar apply karni ho tu 

let box = document.querySelector("p");

let button = document.querySelector("button");
let offButton = document.querySelector(".offButton");

button.addEventListener("click", () => {
    box.style.scale = "1";
});

offButton.addEventListener("click", () => {
  box.style.scale = "0.5";
});
