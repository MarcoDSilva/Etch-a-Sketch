const btn = document.querySelector('#btn-grids');
const cleanCanvas = document.querySelector('#btn-clear');
const sketchGrid = document.querySelector('.sketch-grid');
const btnColors = document.querySelector('#btn-randomColor');
let color = "";
let gridsToCreate = 0;

//button events
btn.addEventListener('click', getGridNumber);
cleanCanvas.addEventListener('click', cleanGrid);
btnColors.addEventListener('click', generateColors);

//functions
function getGridNumber() {
    resetGrid();
    gridsToCreate = parseInt(prompt("Num of squares 'till max of 80 or min of 2. (80x80)", 16)); 

    if(gridsToCreate < 2) {
        createDivsOntoGrid(2);
    } else if(gridsToCreate <= 80) {
        createDivsOntoGrid(gridsToCreate);
    } else {
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

    if(this.className === 'drawing') {
        if(this.id !== "") {
            let newID = this.id - 10;
            this.id = newID;
            this.style.filter = `brightness(${newID}%)`;           
        } else {
            this.id = "90";
            this.style.filter = `brightness(90%)`;
        }
        return;
    }

    this.classList.add('drawing');   

    if(color !== ""){
        this.style.backgroundColor = `rgb(${color})`;
    } else {
        this.style.backgroundColor = `rgb(255,255,255)`;
    }

}

function cleanGrid() {
    const gridElements = document.querySelectorAll('.drawing');  
    gridElements.forEach(grid => grid.removeAttribute('style', 'class', 'id'));
}

function randomizeRGB() {
    return Math.round(Math.random() * 256);
}

function generateColors() {
    let r = randomizeRGB();
    let g = randomizeRGB();
    let b = randomizeRGB();

    color = r + " " + g + " " + b; 
}