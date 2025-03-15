function CreateLego(){
    var section = document.getElementById('lego');

    var row = document.createElement('div');
    row.classList.add('row', 'h-100');

    var col1 = document.createElement('div');
    col1.classList.add('col-md-6');
    var col2 = document.createElement('div');
    col2.classList.add('col-md-6');

    row.appendChild(col1);
    row.appendChild(col2);

    section.appendChild(row);
}