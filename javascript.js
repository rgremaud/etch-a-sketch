// create a 16x16 grid of square divs
// set divs inside of a container div w/flexbox

const container = document.querySelector("#container");

function createBox(width,height,backgroundColor) {

    const box = document.createElement("box")
    box.classList.add("box");
    box.style.width = width + 'px';
    box.style.height = height + 'px';
    box.style.backgroundColor = backgroundColor;
    box.style.border = "1px solid black";
    container.appendChild(box);
    return box;
}