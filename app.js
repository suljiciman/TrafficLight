document.getElementById('stop').onclick = illuminateRed;
document.getElementById('wait').onclick = illuminateYellow;
document.getElementById('go').onclick = illuminateGreen;

function illuminateRed() {
  clearLights();
  document.getElementById('stop').style.backgroundColor = "red";
}

function illuminateYellow() {
  clearLights();
  document.getElementById('wait').style.backgroundColor = "orange";
}

function illuminateGreen() {
    clearLights();
    document.getElementById('go').style.backgroundColor = "green";
  }


function clearLights() {
  document.getElementById('stop').style.backgroundColor = "black";
  document.getElementById('wait').style.backgroundColor = "black";
  document.getElementById('go').style.backgroundColor = "black";
}


