function LoadPage() {

    var body = document.body;

    body.appendChild(CreateDOM());
}

function CreateDOM() {
    var container = document.createElement("div");
    container.classList.add('container-fluid');

    var jumbotron = document.createElement('div');
    jumbotron.classList.add('mt-4', 'p-5', 'bg-primary', 'text-white', 'rounded');

    var jumboTronHeader = document.createElement('div');
    jumboTronHeader.innerText = "Mike Does Stuff";

    var jumbotronSubHeader = document.createElement('p');
    jumbotronSubHeader.innerText = "My Corner of the internet";

    jumbotron.appendChild(jumboTronHeader);
    jumbotron.appendChild(jumbotronSubHeader);

    container.appendChild(jumbotron);

    return container;
}