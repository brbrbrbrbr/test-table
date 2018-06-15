let i = 0;
let j = 0;
let rowNumber = 3;
let colNumber = 3;

let element = document.getElementById('test-content__test-table');
element.addEventListener( 'mouseover', function () {
        let buttonVisibility = document.getElementsByClassName('test-content__red-button');
        for (j = 0; j < 2; j++) {
            buttonVisibility[j].style.opacity = '1';
        }
        /*var x = element.offsetX == undefined?element.layerX:element.offsetX;
        var y = element.offsetY == undefined?element.layerY:element.offsetY;
        console.log(x +' X '+ y);*/
        var x = MouseEvent.offsetX;
        var y = MouseEvent.offsetY;
        console.log(x +' X '+ y);
})

element.addEventListener( 'mouseout', function () {
    let buttonVisibility = document.getElementsByClassName('test-content__red-button');
    for (j = 0; j < 2; j++) {
        buttonVisibility[j].style.opacity = '0';
    }
})

function addColumnToTable(){
    let addEltmentToTable = document.createElement("div");
    addEltmentToTable.className = "col";
    element.appendChild(addEltmentToTable);
    console.log('added col');
    let colElement = document.getElementById('test-content__test-table').lastChild;
    for (i = 0; i < rowNumber; i++) {
        let addEltmentTocolumn = document.createElement("div");
        addEltmentTocolumn.className = "test-content__square";
        colElement.appendChild(addEltmentTocolumn);
        console.log('added div to col');
    }
    colNumber++;
}

function addRowToTable(){
    let columnElements = document.getElementsByClassName('col');
    for (i = 0; i < colNumber; i++) {
        let addingRow = document.createElement("div");
        addingRow.className = "test-content__square";
        columnElements[i].appendChild(addingRow);
    }
    rowNumber++;
}
function removeEltmentFromTable(){
    let element = document.getElementById('test-content__test-table');
    element.removeChild(element);
}