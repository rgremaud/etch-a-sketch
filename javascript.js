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

// create function to call a for loop to build grid
// boxCount is numbers of rows/columns 
// width and height of container is 500px
// box dimensions to equal 500px/(boxCount+"px") in order to fill full grid

function buildGrid(boxCount,targetWidth,targetHeight,color) {
    let i = 0;
    let width = targetWidth;
    let height = targetHeight;
    let backgroundColor = color;
    for (i = 0; i <= boxCount ** 2; i++) {
        createBox(width,height,backgroundColor);
    }

}