function LoadPage() {

    CreateDOM();
    CreateHero();
}

function CreateDOM() {

    var body = document.body;

    var container = document.createElement("div");
    container.classList.add('container-fluid');

    container.appendChild(CreateFullHeightSection('hero'));
    container.appendChild(CreateFullHeightSection('aboutMe'));
    container.appendChild(CreateFullHeightSection('resume'));
    container.appendChild(CreateFullHeightSection('photos'));
    container.appendChild(CreateFullHeightSection('vinyl'));
    container.appendChild(CreateFullHeightSection('lego'));
    container.appendChild(CreateFullHeightSection('projects'));
    container.appendChild(CreateFullHeightSection('sandbox'));
    container.appendChild(CreateFullHeightSection('contact'));

    body.appendChild(container)

    return container;
}

function CreateFullHeightSection(id) {
    var section = document.createElement('section');

    section.id = id;

    section.innerText = id;

    section.style.height = '100vh';

    return section;
}