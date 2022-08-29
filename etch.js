let numberGridItems = 50;

const sketchField = document.getElementById('sketch-field');
const gridLayout = document.getElementById('grid-layout');
const resButton = document.getElementById('button-reset');
const slider = document.getElementById('slider');

slider.addEventListener('input', updateGridLabel);
slider.addEventListener('click', changeGrid);

/// Write initial Grid Layout at start
writeGrid();

gridLayout.textContent = `${numberGridItems} x ${numberGridItems}`;

let sketchItems = document.querySelectorAll('.item');

addHoverEffect();

/// Update GridLayout Label
function updateGridLabel(){
    numberGridItems = slider.value;
    gridLayout.textContent = `${numberGridItems} x ${numberGridItems}`;
}

function changeGrid(){
    /// implement way that grid change is seen live while sliding
    numberGridItems = slider.value;
    resetColor();
    writeGrid();
    sketchItems = document.querySelectorAll('.item');
    addHoverEffect();
    ///updateGridLabel();
}

/// Rewrite Grid
function writeGrid(){
    sketchField.replaceChildren();
    
    for(let i = 0; i < numberGridItems; i++){
        const gridLine = document.createElement('div');
        sketchField.appendChild(gridLine);
    };

    let gridLines = sketchField.childNodes;

    gridLines.forEach(line => line.className = "line");

    gridLines.forEach(addGridItems);

};

function addGridItems(line){
    for(let j = 0; j < numberGridItems; j++){
            const gridItem = document.createElement('div');
            gridItem.className = 'item';
            line.appendChild(gridItem);
        };
};


/// Hover Effect
function addHoverEffect(){
    sketchItems.forEach(item => {
        item.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = 'rgb(201, 131, 131)';
        });
    });
};


/// Reset Color
resButton.addEventListener('click', resetColor);
function resetColor(){
    sketchItems.forEach(item => {
            item.style.backgroundColor = '';
        });
    }



    

