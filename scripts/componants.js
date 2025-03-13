function CreateFullHeightSection(id) {
    var section = document.createElement('div');
    section.classList.add('section', 'p-2');
    section.id = id;
    return section;
}

function CreateNavBar() {

    var nav = document.createElement('nav');
    nav.classList.add('navbar', 'navbar-expand-sm', 'bg-dark', 'navbar-dark', 'fixed-top');

    var container = document.createElement('div');
    container.classList.add('container-fluid');

    var ul = document.createElement('ul');
    ul.classList.add('navbar-nav');

    for (var pageSection of _pageSections) {
        var li = document.createElement('li');
        var link = document.createElement('a');
        link.classList.add('nav-link');
        link.href = '#' + pageSection.id;
        link.innerText = pageSection.text;
        li.appendChild(link);
        ul.appendChild(li);
    }

    container.appendChild(ul);
    nav.appendChild(container);
    return nav;
}

