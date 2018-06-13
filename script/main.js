

function addColumnToTable(){
    let rowNumber = 2;
    let colNumber = 1;
    let i = 0;
    let j = 0;
    let element = document.getElementById('test-content__test-table');
    let addEltmentToTable = document.createElement("div");
    addEltmentToTable.className = "col";
    element.appendChild(addEltmentToTable);
    console.log('added col');

}
function removeEltmentFromTable(){
    let element = document.getElementById('test-content__test-table');
    element.removeChild(element);
}