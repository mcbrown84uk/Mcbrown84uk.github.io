function CreateInterests() {
    var section = document.getElementById("interests");

    var container = document.createElement('div');
    var row = document.createElement('div');

    container.classList.add('container-fluid', 'h-100', 'g-0')
    row.classList.add('row', 'h-100', 'g-0');

    for (var interest of _interests) {
        var interestContainer = document.createElement('div');
        interestContainer.id = interest.toLowerCase() + 'Container';
        interestContainer.classList.add('col-md-4', 'h-md-100', 'interests-container', 'position-relative');
        
        var title = document.createElement('a');
        title.classList.add('interests-title', 'position-absolute', 'top-50', 'start-50', 'translate-middle', 'p-2', 'w-100', 'text-center');
        title.innerText = interest;
        title.href = '#' + interest.toLowerCase();
        interestContainer.appendChild(title);

        row.appendChild(interestContainer);
    }

    container.appendChild(row);

    section.appendChild(container);
}