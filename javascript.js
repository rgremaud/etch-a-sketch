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

// function to clear all boxes before populating a new grid
const remove = (sel) => document.querySelectorAll(sel).forEach(el => el.remove());

function buildGrid(boxCount) {
    //clearGrid(box);
    remove(".box");
    let i = 0;
    let width = (500/boxCount)-2;
    let height = (500/boxCount)-2;
    let backgroundColor = "white";
    for (i = 0; i < boxCount ** 2; i++) {
        createBox(width,height,backgroundColor);
        }
    }

// randomNumber generator for random color on hover w/rgb

function randomNumber(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
 const button = document.querySelector('gridButton');

 gridButton.addEventListener('click', function() {
    let boxCount = prompt("Please enter an number between 16 and 100.")
    buildGrid(boxCount);
    });
  
 buildGrid(16);
 

 