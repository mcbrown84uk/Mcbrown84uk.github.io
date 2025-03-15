function CreateHero() {
    var section = document.getElementById("hero");
    section.classList.add('position-relative');

    var span = document.createElement('h1');

    span.innerText = 'mikedoesstuff.online';
    span.classList.add('hero-title', 'position-absolute', 'bottom-0', 'start-0');

    section.appendChild(span);
}