
function cambiarColorcabecera(){
    const titulo1 = document.querySelector("h1");
    titulo1.style.color = "red";
 
}
 
function cambiarNumero(){

    var parrafo = document.querySelector("#numero");
    var texto = parrafo.textContent;
    var resultado0;
    var num1 = 1;
    var n =parseInt(texto);
    resultado0 = n + num1;
    parrafo.textContent = resultado0;
}