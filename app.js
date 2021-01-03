const gridContainer = document.querySelector('#grid-container');
const btn = document.querySelector('.btn');

// Load a 16 x 16 grid 
window.addEventListener('load', startGrid)

// Reset Grid to size of your choice  
btn.addEventListener("click", reset);

let size = 16;

function startGrid(){
gridSize(size);
createGrid(size);
};

// Create grid Size
function gridSize(size){
    gridContainer.style.gridTemplateColumns = `repeat(${size},1fr)`;
};

//  creates Divs for grid and add event listner 
function createGrid (size){
    for (let i = 0; i < size*size; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList = "grid-element";
        gridElement.addEventListener('mouseover', changeColor);
        gridContainer.appendChild(gridElement);
    }
};

// adds background to mouseover div
function changeColor(e){
    e.target.style.backgroundColor = 'black';
}

function reset (){
    
    // remove all chiled nodes from gridContainer

    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    size = prompt('New Size');

// check to make sure is number 
    if(size !== null) {
        size = parseInt(size);
        if(size < 1 || size >64 || Number.isNaN(size)){
             alert("Enter a number from 1-64 range");
             reset();
        } else {
            startGrid(size); 
        }
    }
}

