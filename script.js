const container = document.querySelector('.container');
const clearbtn = document.querySelector('#clear');
const newbtn = document.querySelector('#new');

makeGrid(16, 16);

let mouseIsDown = false;

document.addEventListener('mousedown', () => {
    mouseIsDown = true;
});
document.addEventListener('mouseup', () => {
    mouseIsDown = false;
});

clearbtn.addEventListener('click', clear);
newbtn.addEventListener('click', newGrid);

function draw(e){
    if(mouseIsDown){
        e.target.style.backgroundColor = `rgb(${(Math.floor(Math.random()*255) + 1)}, ${(Math.floor(Math.random()*255) + 1)}, ${(Math.floor(Math.random()*255) + 1)}`;
        // e.target.style.backgroundColor = `black`;
    }
}

function newGrid() {
    let gridSize = window.prompt('Enter grid size...');
    if (gridSize <= 100 && gridSize) {
        clear();
        container.innerHTML = '';
        makeGrid(gridSize, gridSize);
    } else {
        window.alert('Please enter grid size between 5-100.');
    }
}

function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        // cell.innerText = (i + 1);
        container.appendChild(cell).className = 'grid-item';
    };
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(gridItem => {
        gridItem.addEventListener('mouseover', draw);
    });
    
};

function clear(){
    document.querySelectorAll('.grid-item').forEach(gridItem => {
        gridItem.style.backgroundColor = 'white';
    });
}