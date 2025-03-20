function LoadAttendees() {


    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('aid');

    //var attendeesList = document.getElementById('attendeesList');
    //attendeesList.innerText = myParam;

    let html5QrcodeScanner = new Html5QrcodeScanner(
        "qrreader",
        { fps: 10, qrbox: { width: 250, height: 250 } },
    /* verbose= */ false);
    html5QrcodeScanner.render(onScanSuccess, onScanFailure);
}





function onScanSuccess(decodedText, decodedResult) {
    // handle the scanned code as you like, for example:
    console.log(`Code matched = ${decodedText}`, decodedResult);
}

function onScanFailure(error) {
    // handle scan failure, usually better to ignore and keep scanning.
    // for example:
    console.warn(`Code scan error = ${error}`);
}