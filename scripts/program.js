function LoadPage() {
    var body = document.body;

    body.setAttribute('data-bs-spy', 'scroll');
    body.setAttribute('data-bs-target', '.navbar');
    body.setAttribute('data-bs-offset', '50');

    body.appendChild(CreateNavBar());

    for (var pageSection of _pageSections) {
        body.appendChild(CreateFullHeightSection(pageSection.id));
    }

    // fetch('data/setlists.json')
    // .then(response => response.json()) // Parse JSON
    // .then(data => console.log(data)) // Work with JSON data
    // .catch(error => console.error('Error fetching JSON:', error));

    CreateHero();
    CreateInterests();
    CreateLego();
}


