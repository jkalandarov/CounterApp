let count = 0;
let entries = [];

let displayElement = document.getElementById('count-el');

document.getElementById('increment-btn').addEventListener('click', increment);

var saveButton = document.getElementById('save-btn');
saveButton.addEventListener('click', save);
var showEntries = document.getElementById('save-el');
var total = document.getElementById('total');

var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetToZero);


function increment (){
    count++;
    displayElement.innerText = count;
}

function save() {
    entries.push(count);
    count = 0;
    showEntries.innerText = "Previous entries: " + entries.map(elem => { return elem} );
    total.innerText = 'TOTAL ENTRIES: ' + entries.reduce((a, b) => a+b);
}

function resetToZero(){
    count = 0;
    entries = [];
    showEntries.innerText = "Previous entries: " + entries;
    total.innerText = 'TOTAL ENTRIES: ' + entries;
    displayElement.innerText = 0;
}