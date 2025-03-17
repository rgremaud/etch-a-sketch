//let boxCount = "";

const container = document.querySelector("#container");

function randomNumber(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function createBox(width,height) { 
    const box = document.createElement("box")
    box.classList.add("box");
    box.style.width = width + 'px';
    box.style.height = height + 'px';
    box.style.backgroundColor = "white";
    container.appendChild(box);
    return box;
}

function createGrid(boxCount) {
    let i = 0;
    let width = (500/boxCount);
    let height = (500/boxCount);
    let backgroundColor = "white";
    for (i = 0; i < boxCount ** 2; i++) {
        createBox(width,height);
        }
    }

const remove = (item) => document.querySelectorAll(item).forEach(element => element.remove());

const colorMode = (item) => document.querySelectorAll(item).forEach(element => element.addEventListener('mouseover', function() {
    this.style.backgroundColor = `rgb(${randomNumber(0,255)},${randomNumber(0,255)},${randomNumber(0,255)})`;
  }))


const darkMode = (item) => document.querySelectorAll(item).forEach(element => element.addEventListener('mouseover', function() {
    this.style.backgroundColor = `black`;
  }))

const erase = (item) => document.querySelectorAll(item).forEach(element => element.style.backgroundColor = "white");


// buttons
  
 const button1 = document.querySelector('gridButton');
 gridButton.addEventListener('click', function() {
    remove('.box')
    let boxCount = prompt("Please enter an number between 16 and 100.")
    start(boxCount);
    });

const button2 = document.querySelector('clearButton');
clearButton.addEventListener('click', function() {
    erase('.box');
})

const button3 = document.querySelector('colormode');  
colorMode.addEventListener('click', function() {
    colorMode('.box');
})

const button4 = document.querySelector('darkMode');
darkMode.addEventListener('click', function()  {
    darkMode('.box');
})

function start(count) {
    createGrid(count);
    colorMode('.box');
}
 
start(16);
 