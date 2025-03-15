function CreateInterests(){
    var section = document.getElementById("interests");

    var container = document.createElement('div');
    var row = document.createElement('div');
    var legoContainer = document.createElement('div');
    legoContainer.id = 'legoContainer';
    var vinylContainer = document.createElement('div');
    vinylContainer.id = 'vinylContainer'
    var travelContainer = document.createElement('div');
    travelContainer.id = 'travelContainer';

    container.classList.add('container-fluid', 'h-100', 'g-0')
    
    row.classList.add('row', 'h-100', 'g-0');

    legoContainer.classList.add('col-md-4', 'h-md-100', 'interests-container', 'position-relative');
    vinylContainer.classList.add('col-md-4', 'h-md-100', 'interests-container', 'position-relative');
    travelContainer.classList.add('col-md-4', 'h-md-100', 'interests-container', 'position-relative');

    var legoTitle = document.createElement('a');
    legoTitle.classList.add('interests-title', 'position-absolute', 'top-50', 'start-50', 'translate-middle', 'p-2', 'w-100', 'text-center');
    legoTitle.innerText = 'Lego';
    legoTitle.href = "#lego";
    legoContainer.appendChild(legoTitle);

    var vinylTitle = document.createElement('a');
    vinylTitle.classList.add('interests-title', 'position-absolute', 'top-50', 'start-50', 'translate-middle', 'p-2', 'w-100', 'text-center');
    vinylTitle.innerText = 'Vinyl';
    vinylContainer.appendChild(vinylTitle);

    var travelTitle = document.createElement('a');
    travelTitle.classList.add('interests-title', 'position-absolute', 'top-50', 'start-50', 'translate-middle', 'p-2', 'w-100', 'text-center');
    travelTitle.innerText = 'Travel';
    travelContainer.appendChild(travelTitle);

    row.appendChild(legoContainer);
    row.appendChild(vinylContainer);
    row.appendChild(travelContainer);

    container.appendChild(row);

    section.appendChild(container);
}