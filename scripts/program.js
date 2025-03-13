

function LoadPage() {

    CreateDOM();
    CreateHero();
}

function CreateDOM() {

    var body = document.body;
    body.setAttribute('data-bs-spy', 'scroll');
    body.setAttribute('data-bs-target', '.navbar');
    body.setAttribute('data-bs-offset', '50');

    var container = document.createElement("div");
    container.classList.add('container-fluid', 'g-0');

    for(var pageSection of _pageSections){
        container.appendChild(CreateFullHeightSection(pageSection.id));
    }

    body.appendChild(container)
    container.appendChild(CreateNavBar());

    return container;
}

function CreateFullHeightSection(id) {
    var section = document.createElement('div');
    section.classList.add('section', 'p-2');
    section.id = id;
    return section;
}