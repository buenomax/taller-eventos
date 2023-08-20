function mostrarSaludo() {
    alert('¡Hola!');
}

const divContenedor = document.getElementById('contenedor');
divContenedor.addEventListener('click', () => {
    alert('Hola! Soy el div');
});