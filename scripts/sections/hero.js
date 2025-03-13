function CreateHero(){
    var section = document.getElementById("hero");

    var jumbotron = document.createElement('div');
    jumbotron.classList.add('mt-4', 'p-5', 'bg-primary', 'text-white', 'rounded');

    var jumboTronHeader = document.createElement('h1');
    jumboTronHeader.innerText = "Mike Does Stuff";

    var jumbotronSubHeader = document.createElement('p');
    jumbotronSubHeader.innerText = "This is all generated with vanilla JS!";

    jumbotron.appendChild(jumboTronHeader);
    jumbotron.appendChild(jumbotronSubHeader);

    section.appendChild(jumbotron);
}