

function LoadPage() {
    CreateDOM();
    CreateHero();
    CreateInterests();
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
}

