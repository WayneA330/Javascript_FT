function insertRow() {
    console.log('Insert Row');

    let table = document.getElementById('sampleTable');
    console.log(table);

    let row = document.createElement('tr');

    let cell1 = document.createElement('td');
    cell1.textContent = 'Cell 1';
    row.appendChild(cell1);

    let cell2 = document.createElement('td');
    cell2.textContent = 'Cell 2';
    row.appendChild(cell2);


    table.appendChild(row);
}