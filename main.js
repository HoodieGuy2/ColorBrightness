// LUMINENCE CALCULATOR

document.getElementById("calcBtn").addEventListener("click", brightness);

function brightness() {
  var red = Number(document.getElementById("red").value);
  var green = Number(document.getElementById("green").value);
  var blue = Number(document.getElementById("blue").value);

  var redV = 0.299 * (red * red);
  var greenV = 0.587 * (green * green);
  var blueV = 0.114 * (blue * blue);

  var lum = Math.sqrt(redV + greenV + blueV);
  document.getElementById("LNUM").innerHTML = lum;
}
