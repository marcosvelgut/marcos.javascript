var square = document.getElementById("square");
var btnIncreaseOpacity = document.getElementById("btnIncreaseOpacity");
var btnDecreaseOpacity = document.getElementById("btnDecreaseOpacity");
var btnAumentarTamaño = document.getElementById("btnAumentarTamaño");
var btnReducirTamaño = document.getElementById("btnReducirTamaño");

var opacity = 1;
var size = 150;

function getSquareSize() {
  return parseFloat(square.style.width || window.getComputedStyle(square).width);
}

function updateSquareStyle() {
  square.style.opacity = opacity;
  square.style.width = size + "px";
  square.style.height = size + "px";
}

btnIncreaseOpacity.addEventListener("click", function() {
  if (opacity < 1) {
    opacity = parseFloat((opacity + 0.1).toFixed(1));
    updateSquareStyle();
  }
});

btnDecreaseOpacity.addEventListener("click", function() {
  if (opacity > 0) {
    opacity = parseFloat((opacity - 0.1).toFixed(1));
    updateSquareStyle();
  }
});


