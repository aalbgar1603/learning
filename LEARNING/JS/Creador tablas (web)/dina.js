function obtenerValor() {
    let contenedor = document.getElementById('contenedor');
    let cantidadH = parseInt(document.getElementById('cantidadH').value);
    let cantidadV = parseInt(document.getElementById('cantidadV').value);

    let resultado = document.createDocumentFragment();
    let table = document.createElement('TABLE');

    let contador = 1;

    for (let i = 1; i <= cantidadV; i++) {
    let tr = document.createElement('TR');
    let filas = tr;
        for (let j = 1; j <= cantidadH; j++) {
            let td = document.createElement('TD');
            td.textContent = contador;
            let columnas = td;
            filas.appendChild(columnas);
            contador++;
        }
    table.appendChild(filas);
    }
    resultado.appendChild(table);
    contenedor.appendChild(resultado);
}
