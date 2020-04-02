//create a 16x16 grid here
//put them inside div sketchgrid

//btn to reset/clear grid
//popup or other to create a new grid with X squares~

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
    gridsToCreate = parseInt(prompt("Num of squares? 100 x 100, 10x10, etc.", 16));
    createDivsOntoGrid(gridsToCreate);
}

function createDivsOntoGrid(number) {
    for (let rows = 0; rows < number; rows++) {
        for (let columns = 0; columns < number; columns++) {
            const div = document.createElement('div');
            sketchGrid.appendChild(div);
        }
    }
}

function resetGrid() {
    sketchGrid.innerHTML = "";
    gridsToCreate = 0;
    
}