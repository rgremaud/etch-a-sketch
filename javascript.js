const container = document.querySelector("#container");

// createBoxColor and createBoxBlack

function createBoxColor(width,height,backgroundColor) {
    const box = document.createElement("box")
    box.classList.add("box");
    box.style.width = width + 'px';
    box.style.height = height + 'px';
    box.style.backgroundColor = backgroundColor;
    box.style.border = ".5px solid darkgray";
    //box.style.opacity = .1;
    box.addEventListener('mouseover', function() {
        this.style.backgroundColor = `rgb(${randomNumber(0,255)},${randomNumber(0,255)},${randomNumber(0,255)})`;
        //box.style.opacity = .1;
      });
    box.addEventListener('mouseover', function() {
        this.style.opactiy = box.style.opacty + .1;
    });
    container.appendChild(box);
    return box;
}

function createBoxBlack(width,height,backgroundColor) {
    const box = document.createElement("box")
    box.classList.add("box");
    box.style.width = width + 'px';
    box.style.height = height + 'px';
    box.style.backgroundColor = "white";
    box.style.border = ".5px solid darkgray";
    //box.style.opacity = .1;
    box.addEventListener('mouseover', function() {
        this.style.backgroundColor = "black";
        //box.style.opacity = .1;
      });
    box.addEventListener('mouseover', function() {
        this.style.opactiy = box.style.opacty + .1;
    });
    container.appendChild(box);
    return box;
}

// Build grid color and black

function buildGridColor(boxCount) {
    remove(".box");
    let i = 0;
    let width = (500/boxCount)-1;
    let height = (500/boxCount)-1;
    let backgroundColor = "white";
    for (i = 0; i < boxCount ** 2; i++) {
        createBoxColor(width,height,backgroundColor);
        }
    }

function buildGridBlack(boxCount) {
    remove(".box");
    let i = 0;
    let width = (500/boxCount)-1;
    let height = (500/boxCount)-1;
    let backgroundColor = "white";
    for (i = 0; i < boxCount ** 2; i++) {
        createBoxBlack(width,height,backgroundColor);
        }
    }

// function to clear all boxes before populating a new grid
const remove = (itemRemove) => document.querySelectorAll(itemRemove).forEach(element => element.remove());



// randomNumber generator for random color on hover w/rgb

function randomNumber(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
 const button = document.querySelector('gridButton');

 gridButton.addEventListener('click', function() {
    let boxCount = prompt("Please enter an number between 16 and 100.")
    buildGridColor(boxCount);
    });

clearButton.addEventListener('click', function() {
    remove(".box")
    buildGridColor(16);
})
  
colorMode.addEventListener('click', function() {
    remove(".box")
    buildGridColor(16);
})

darkMode.addEventListener('click', function()  {
    remove(".box")
    buildGridBlack(16);
})

 buildGridColor(16);
 

 