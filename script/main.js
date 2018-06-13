let i = 0;
let j = 0;
let rowNumber = 3;
let colNumber = 3;
function addColumnToTable(){
    let element = document.getElementById('test-content__test-table');
    let addEltmentToTable = document.createElement("div");
    addEltmentToTable.className = "col";
    element.appendChild(addEltmentToTable);
    console.log('added col');
    let collElement = document.getElementById('test-content__test-table').lastChild;
    for (i = 0; i < rowNumber; i++) {
        let addEltmentTocolumn = document.createElement("div");
        addEltmentTocolumn.className = "test-content__square";
        collElement.appendChild(addEltmentTocolumn);
        console.log('added div to col');
    }
    colNumber++;
}
function removeEltmentFromTable(){
    let element = document.getElementById('test-content__test-table');
    element.removeChild(element);
}