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
    box.addEventListener('mouseover', function() {
        this.style.backgroundColor = `rgb(${randomNumber(0,255)},${randomNumber(0,255)},${randomNumber(0,255)})`;
      });
    container.appendChild(box);
    return box;
}



// create function to call a for loop to build grid
// boxCount is numbers of rows/columns 
// width and height of container is 500px
// box dimensions to equal 500px/(boxCount+"px") in order to fill full grid
// Create a button for buildGrid
// User will select the button which will then prompt for the boxCount and call the function

function buildGrid(boxCount) {
    let i = 0;
    let width = (500/boxCount)-2;
    let height = (500/boxCount)-2;
    let backgroundColor = "white";
    for (i = 0; i < boxCount ** 2; i++) {
        createBox(width,height,backgroundColor);
    }

}


// create a function that generates a random color
// use rgb(a,b,c) each value can range from 0-255 with some form of random number generator for each value

function randomNumber(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
// add event listener for button click on gridButton
// on click open a prompt to enter a number between 16 and 100
// prompt sets value of boxCount
// runs buildGrid function to populate new grid


// write a function to set color of all grids to white and reset to 16x16

 buildGrid(16);

 const button = document.querySelector('gridButton');

 gridButton.addEventListener('click', function() {
    let boxCount = prompt("Please enter an integer between 16 and 100.")
    buildGrid(boxCount);
    // Need to fix buildGrid function so it clears currenty grid.
 });
  