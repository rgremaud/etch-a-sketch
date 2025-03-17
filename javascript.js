let boxCount = "";

const container = document.querySelector("#container");

function randomNumber(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

const remove = (item) => document.querySelectorAll(item).forEach(element => element.remove());

// break out functions so you have createBox, createGrid and createColormode 

function createBox(width,height) { 
    const box = document.createElement("box")
    box.classList.add("box");
    box.style.width = width + 'px';
    box.style.height = height + 'px';
    box.style.backgroundColor = "white";
    //box.style.border = "1px solid darkgray"
    container.appendChild(box);
    return box;
}

function createGrid(boxCount) {
    remove(".box");
    let i = 0;
    let width = (500/boxCount);
    let height = (500/boxCount);
    let backgroundColor = "white";
    for (i = 0; i < boxCount ** 2; i++) {
        createBox(width,height);
        }
    }

// adds color hover to boxes
const colorMode = (item) => document.querySelectorAll(item).forEach(element => element.addEventListener('mouseover', function() {
    this.style.backgroundColor = `rgb(${randomNumber(0,255)},${randomNumber(0,255)},${randomNumber(0,255)})`;
  }))


const darkMode = (item) => document.querySelectorAll(item).forEach(element => element.addEventListener('mouseover', function() {
    this.style.backgroundColor = `black`;
  }))


function createBoxColor(width,height,backgroundColor) {
    const box = document.createElement("box")
    box.classList.add("box");
    box.style.width = width + 'px';
    box.style.height = height + 'px';
    box.style.backgroundColor = backgroundColor;
    //box.style.border = ".5px solid darkgray";
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
    //box.style.border = ".5px solid darkgray";
    //box.style.opacity = .1;
    box.addEventListener('mouseover', function() {
        this.style.backgroundColor = "black";
        
      });
    container.appendChild(box);
    return box;
}

// Build grid color and black

function buildGridColor(boxCount) {
    remove(".box");
    let i = 0;
    let width = (500/boxCount);
    let height = (500/boxCount);
    let backgroundColor = "white";
    for (i = 0; i < boxCount ** 2; i++) {
        createBoxColor(width,height,backgroundColor);
        }
    }

function buildGridBlack(boxCount) {
    remove(".box");
    let i = 0;
    let width = (500/boxCount);
    let height = (500/boxCount);
    let backgroundColor = "white";
    for (i = 0; i < boxCount ** 2; i++) {
        createBoxBlack(width,height,backgroundColor);
        }
    }

// buttons
  
 const button1 = document.querySelector('gridButton');
 gridButton.addEventListener('click', function() {
    let boxCount = prompt("Please enter an number between 16 and 100.")
    buildGridColor(boxCount);
    });

const button2 = document.querySelector('clearButton');
clearButton.addEventListener('click', function() {
    remove(".box");
    buildGridColor(16);
})

const button3 = document.querySelector('colormode');  
colorMode.addEventListener('click', function() {
    remove(".box")
    buildGridColor(16);
})

const button4 = document.querySelector('darkMode');
darkMode.addEventListener('click', function()  {
    remove(".box")
    buildGridBlack(16);
})

 //buildGridColor(16);
 

 