document.querySelector('#btnSaludar').addEventListener('click', function() {
    const nombre = document.querySelector('#nombre').value;
    salutations(nombre);
});

function salutations(nombre) {
    const saludo = `¡Saludos, ${nombre}!`;
    document.querySelector('#saludo').textContent = saludo;
}
