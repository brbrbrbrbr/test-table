function addEltmentToTable(){
    var element = document.getElementById('test-content__test-table');
    var addEltmentToTable = document.createElement("div");
    addEltmentToTable.className = "test-content__square";
    element.appendChild(addEltmentToTable);
}
function removeEltmentFromTable(){
    var element = document.getElementById('test-content__test-table');
    element.removeChild(element);
}