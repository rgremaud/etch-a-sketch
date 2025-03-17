let boxCount = "";

const container = document.querySelector("#container");

function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function createBox(width,height) { 
    const box = document.createElement("box")
    box.classList.add("box");
    box.style.width = width + 'px';
    box.style.height = height + 'px';
    box.style.backgroundColor = "white";
    box.style.opacity = `.1`;
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

const increaseOpacity = (item) => document.querySelectorAll(item).forEach(element => element.addEventListener('mouseenter', function() { 
    if (this.style.opacity <= .9) { 
        this.style.opacity = +this.style.opacity + .1; }
  }))

// buttons
  
 const buttonGridBuild = document.querySelector('gridButton');
 gridButton.addEventListener('click', function() {
    remove('.box')
    let boxCount = prompt("Please enter an number between 16 and 100.")
    start(boxCount);
    });

const buttonErase = document.querySelector('clearButton');
clearButton.addEventListener('click', function() {
    erase(`.box`);
})

const buttonColorMode = document.querySelector('colorModeButton');  
colorModeButton.addEventListener('click', function() {
    colorMode(`.box`);
})

const buttonDarkMode = document.querySelector('darkModeButton');
darkModeButton.addEventListener('click', function()  {
    darkMode(`.box`);
})

function start(count) {
    remove(`.box`);
    createGrid(count);
    colorMode(`.box`);
    increaseOpacity(`.box`)
}
 
 