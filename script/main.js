let i = 0;
let j = 0;
let rowNumber = 3;
let colNumber = 3;
let hoverDivOffsetLeft = 0;
let hoverDivOffsetTop = 0;
let columnElements = document.getElementsByClassName('col');

let element = document.getElementById('test-content__test-table');
element.addEventListener( 'mouseover', function () {
    let buttonVisibility = document.getElementsByClassName('test-content__red-button');
    for (j = 0; j < 2; j++) {
        buttonVisibility[j].style.opacity = '1';
    }
    element.onmousemove = function (event) {
        let removeColumn = document.getElementById('test-content__remove-column');
        let removeRow = document.getElementById('test-content__remove-row');
        let target = event.target;
        if(target.className != 'test-content__square') return;
        hoverDivOffsetLeft = target.offsetLeft;
        hoverDivOffsetTop = target.offsetTop;
        //console.log(hoverDivOffsetTop + ' ' + hoverDivOffsetLeft);
        console.log(`${hoverDivOffsetTop} ${hoverDivOffsetLeft}`);
        removeColumn.style.marginLeft = `${hoverDivOffsetLeft}px`;
        removeRow.style.marginTop = `${hoverDivOffsetTop}px`;
        removeRow.onclick = function(){
            let squaresCounterRows;
            squaresCounterRows = Math.trunc(hoverDivOffsetTop / 52);
            squaresCounterRows++;
            console.log(squaresCounterRows);
            for (i = 0; i < colNumber; i++) {

                //columnElements[i].appendChild(addingRow);
            }
        };
        removeColumn.onclick = function(){
            let squaresCounterColumns;
            squaresCounterColumns = Math.trunc(hoverDivOffsetLeft / 52);
            squaresCounterColumns++;
            console.log(squaresCounterColumns);
            for(i = 0; i < rowNumber; i++){
                if(i === squaresCounterColumns){
                    //for (j = 0; j < colNumber; j++){
                    columnElements[i].remove();
                    //}
                }
                    }
        };
    };
});

/*element.addEventListener( 'mouseout', function () {
    let buttonVisibility = document.getElementsByClassName('test-content__red-button');
    for (j = 0; j < 2; j++) {
        buttonVisibility[j].style.opacity = '0';
    }
});*/

function addColumnToTable(){
    let addEltmentToTable = document.createElement("div");
    addEltmentToTable.className = "col";
    element.appendChild(addEltmentToTable);
    let colElement = document.getElementById('test-content__test-table').lastChild;
    for (i = 0; i < rowNumber; i++) {
        let addEltmentTocolumn = document.createElement("div");
        addEltmentTocolumn.className = "test-content__square";
        colElement.appendChild(addEltmentTocolumn);
    }
    colNumber++;
}

function addRowToTable(){
    for (i = 0; i < colNumber; i++) {
        let addingRow = document.createElement("div");
        addingRow.className = "test-content__square";
        columnElements[i].appendChild(addingRow);
    }
    rowNumber++;
}

function removeColumnFromTable(){

}