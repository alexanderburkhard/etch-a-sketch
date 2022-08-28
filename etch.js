// create outer DIV with fixed px width height
// create x lines of containers (flex set at column with flex 1, so all are equal in size)
// in each line create x divs (items) set all of them to flex row with flex 1, so all are equal in size
// get a nodelist of all items
// foreach item set hover effect
// at hovering style for specific items should change to XX (choose option-later)
// reset button resets style.BG for all items back to white

const numberGridItems = 2;

const sketchField = document.getElementById('sketch-field');
const gridLayout = document.getElementById('grid-layout');
const resButton = document.getElementById('button-reset');

gridLayout.textContent = `${numberGridItems} x ${numberGridItems}`;

resButton.addEventListener('click', resetColor);

function resetColor(event){
    sketchItems.forEach(item => {
            item.style.backgroundColor = '';
        });
    }

for(let i = 0; i < numberGridItems; i++){
    const gridLine = document.createElement('div');
    sketchField.appendChild(gridLine);
};

const gridLines = sketchField.childNodes;

gridLines.forEach(line => line.className = "line");

gridLines.forEach(addGridItems);

function addGridItems(line){
    for(let j = 0; j < numberGridItems; j++){
            const gridItem = document.createElement('div');
            gridItem.className = 'item';
            line.appendChild(gridItem);
        };
};

const sketchItems = document.querySelectorAll('.item');

sketchItems.forEach(item => {
    item.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'rgb(201, 131, 131)';
    });
});



    

