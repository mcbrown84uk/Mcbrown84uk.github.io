

function LoadPage() {

    CreateDOM();
    CreateHero();
}

function CreateDOM() {

    var body = document.body;
    body.setAttribute('data-bs-spy', 'scroll');
    body.setAttribute('data-bs-target', '.navbar');
    body.setAttribute('data-bs-offset', '50');

    body.appendChild(CreateNavBar());

    for(var pageSection of _pageSections){
        body.appendChild(CreateFullHeightSection(pageSection.id));
    }

    return container;
}

function CreateFullHeightSection(id) {
    var section = document.createElement('div');
    section.classList.add('section', 'p-2');
    section.id = id;
    return section;
}