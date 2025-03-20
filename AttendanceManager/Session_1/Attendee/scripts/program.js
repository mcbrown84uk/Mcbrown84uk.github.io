function LoadAttendeePage() {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('aid')

    new QRCode(document.getElementById("divQrCode"), "http://127.0.0.1:5500/AttendanceManager/Session_1/Host/index.html?aid=" + urlParams.get('aid'));
}