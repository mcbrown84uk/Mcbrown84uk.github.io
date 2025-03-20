function LoadAttendeePage() {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('aid')

    new QRCode(document.getElementById("divQrCode"), "http://meetingAttender.com/meetingid/" + urlParams.get('aid'));
}