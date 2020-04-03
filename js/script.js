//random for rgb of colors
const btn = document.querySelector('#btn-grids');
const sketchGrid = document.querySelector('.sketch-grid');
let gridsToCreate = 0;

//sizes of the grid for calculations of how many grids we create
var height = sketchGrid.clientHeight;
var width = sketchGrid.clientWidth;

btn.addEventListener('click', getGridNumber);


function getGridNumber() {
    resetGrid();
    gridsToCreate = parseInt(prompt("Num of squares 'till max of 80. (Represents 80x80)", 16)); 

    if(gridsToCreate <= 80) {
        createDivsOntoGrid(gridsToCreate);
    }  else {
        createDivsOntoGrid(80);
    }
}

function createDivsOntoGrid(number) {
    sketchGrid.style.gridTemplateColumns = `repeat(${number}, 1fr)`;

    for (let rows = 0; rows < number * number; rows++) {
        const div = document.createElement('div');
        div.addEventListener('mouseover', changeBackground);
        sketchGrid.appendChild(div);
    }
    
}

function resetGrid() {
    sketchGrid.innerHTML = "";
    gridsToCreate = 0;    
}

function changeBackground() {
    this.classList.add('drawing');
}