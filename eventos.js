function mostrarSaludo() {
    alert('¡Hola!');
}

const divContenedor = document.getElementById('contenedor');
divContenedor.addEventListener('click', () => {
    alert('Hola! Soy el div');
});

let buton = document.getElementById("saludarBtn");

buton.addEventListener("click", (event) => {

event.stopPropagation();


});