// create a 16x16 grid of square divs
// set divs inside of a container div w/flexbox

const container = document.querySelector("#container");

const box = document.createElement("box")
box.classList.add("box");
box.textContent = "This is a box!";
box.style.width = "100px";
box.style.height = "100px";
box.style.background = "blue";
box.style.color = "white";

container.appendChild(box);