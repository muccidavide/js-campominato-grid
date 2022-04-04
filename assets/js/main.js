/* 
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, 
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

*/

// Funzione per generare una griglia

function generateGrid(selector,tag_name, class_name,limit) {
    const cellsElement = document.querySelector(selector);

    for (let index = 0; index < limit; index++) {
        const cellItem = document.createElement(tag_name);
        cellItem.classList.add(class_name); 
        cellsElement.append(cellItem)

    }

}

// Funzione per selezionare cell

function selectElements(selector) {
    const cells = document.querySelectorAll(selector)
    return cells
}

// Funzione per inserire numeri nei cell

function fillCells(selector) {
    const cells = selectElements(selector)
    for (let index = 0; index < cells.length; index++) {
      const cell = cells[index];
      cell.innerHTML = `<span>${index +1}</span>`
    }
}

// al click la cell cambia colore

function activateCell(selector, active_class) {
    const cells = selectElements(selector)
    //console.log(cells);
  
    for (let index = 0; index < cells.length; index++) {
      const cell = cells[index];
      cell.addEventListener('click', function () {
        cell.style.backgroundColor = 'cornflowerblue';
        cell.style.color = 'white';

      })
    }
}


generateGrid ('.cells','div','cell', 100 ) 
fillCells ('.cell')
activateCell ('.cell', 'selected')

