function CreateFullHeightSection(id) {
    var section = document.createElement('div');
    section.classList.add('section');
    section.id = id;
    return section;
}

function CreateNavBar() {

    var nav = document.createElement('nav');
    nav.classList.add('navbar', 'navbar-expand-md', 'bg-dark', 'navbar-dark', 'fixed-top',  'bg-opacity-75');

    var container = document.createElement('div');
    container.classList.add('container-fluid');

    var navBrand = document.createElement('a');
    navBrand.classList.add('navbar-brand');
    navBrand.href = "#";

    var navBrandImg = document.createElement('img');
    navBrandImg.alt = "MikeDoesStuff Logo";
    navBrandImg.style = "width:32px";
    navBrandImg.src = "images/logo/favicon-32x32.png";

    navBrand.appendChild(navBrandImg);
    container.appendChild(navBrand);

    var hamburger = document.createElement('button');
    hamburger.classList.add('navbar-toggler');
    hamburger.type = 'button';
    hamburger.setAttribute('data-bs-toggle', 'collapse');
    hamburger.setAttribute('data-bs-target', '#collapsibleNavbar');

    var hamburgerIcon = document.createElement('span');
    hamburgerIcon.classList.add('navbar-toggler-icon')
  
    hamburger.appendChild(hamburgerIcon);

    container.appendChild(hamburger);

    var navbarCollapse = document.createElement('div');
    navbarCollapse.classList.add('collapse', 'navbar-collapse');
    navbarCollapse.id = 'collapsibleNavbar';

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

    navbarCollapse.appendChild(ul);
    container.appendChild(navbarCollapse);
    nav.appendChild(container);
    return nav;
}

