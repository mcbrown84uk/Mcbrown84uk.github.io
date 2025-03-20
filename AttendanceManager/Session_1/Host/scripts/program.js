function LoadAttendees(){
    fetch('../')
    .then(response => response.json()) // Parse JSON
    .then(data => LoadVinyl(data)) // Work with JSON data
    .catch(error => console.error('Error fetching JSON:', error));

    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('aid');

    var attendeesList = document.getElementById('attendeesList');
    attendeesList.innerText = myParam;
}