
const botonGenerar = document.getElementById("generar");
const botonReset = document.getElementById("reset");
const contenedorImagenes = document.getElementById("contenedor-imagenes");


botonGenerar.addEventListener("click", () => {
  const cantidad = parseInt(document.getElementById("cantidad").value);

  
  if (isNaN(cantidad) || cantidad <= 0) {
    alert("Por favor, introduce un número válido mayor a 0.");
    return;
  }

  
  for (let i = 0; i < cantidad; i++) {
    const img = document.createElement("img");
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrGo3nGkjVPB-CTE38aotPI2Z_7F7La2aI9A&s"; 
    img.alt = `Imagen ${i + 1}`;
    img.className = "imagen-generada"; 
    contenedorImagenes.appendChild(img);
  }
});

botonReset.addEventListener("click", () => {
  
  const imagenes = document.getElementsByClassName("imagen-generada");

  
  while (imagenes.length > 0) {
    imagenes[0].parentNode.removeChild(imagenes[0]);
  }
});
