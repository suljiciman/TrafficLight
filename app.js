document.getElementById('stop').onclick = illuminateRed;

function illuminateRed() {
    clearLights();
    document.getElementById('stop').style.backgroundColor = "red";
  }