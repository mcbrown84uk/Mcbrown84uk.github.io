function CreateVinyl(){
    fetch('https://mikedoesstuff.online/data/vinyl.json')
    .then(response => response.json()) // Parse JSON
    .then(data => LoadVinyl(data)) // Work with JSON data
    .catch(error => console.error('Error fetching JSON:', error));
}

function LoadVinyl(data){
    var stop = "";
}