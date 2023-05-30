function mostrarValor() {
    let contenedor = document.getElementById('contenedor');
    let opcionSeleccionada = document.querySelector('input[name="opcion"]:checked').value;
    contenedor.appendChild(opcionSeleccionada)
}
