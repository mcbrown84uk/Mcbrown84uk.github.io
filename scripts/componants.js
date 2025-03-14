function CreateFullHeightSection(id) {
    var section = document.createElement('div');
    section.classList.add('section', 'pt-5');
    section.id = id;
    return section;
}

function CreateNavBar() {

    var nav = document.createElement('nav');
    nav.classList.add('navbar', 'navbar-expand-sm', 'bg-dark', 'navbar-dark', 'fixed-top');

    var container = document.createElement('div');
    container.classList.add('container-fluid');

    var navBrand = document.createElement('a');
    navBrand.classList.add('navbar-brand');
    navBrand.href = "#";
    //navBrand.innerText = 'Home';

    var navBrandImg = document.createElement('img');
    navBrandImg.alt = "MikeDoesStuff Logo";
    navBrandImg.style = "width:30px";
    navBrandImg.classList.add('rounded-pill');
    navBrandImg.src = "images/logo/logo1.jpg";

    navBrand.appendChild(navBrandImg);
    container.appendChild(navBrand);

    var ul = document.createElement('ul');
    ul.classList.add('navbar-nav');

    for (var pageSection of _pageSections) {
        if (pageSection.showInNav) {
            var li = document.createElement('li');
            var link = document.createElement('a');
            link.classList.add('nav-link');
            link.href = '#' + pageSection.id;
            link.innerText = pageSection.text;
            li.appendChild(link);
            ul.appendChild(li);
        }
    }

    container.appendChild(ul);
    nav.appendChild(container);
    return nav;
}

