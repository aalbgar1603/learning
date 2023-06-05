//PREGUNTO CANTIDAD DE ALUMNO PARA DEFINIR TAMAÑO DEL FOR QUE PREGUNTA SUS NOMBRES
let cantidad = prompt(`Cantidad de alumnos`);
let alumnosTotales = [];

//GUARDO SUS NOMBRES
for (i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt("Nombre del alumno" + (i + 1)), 0];
}

//CREO LA FUNCION QUE PASA LISTA POR CADA ALUMNO Y LO GUARDA EN LA RAID
const tomarAsistencia = (nombre, p) => {
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P") {
        alumnosTotales[p][1]++;
    }
}

//EJECUTO LA FUNCION
for (i = 0; i < 5; i++) {
    for (alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0], alumno)
    }
}

//MUESTRO RESULTADOS
for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    ______Presentes: ${alumnosTotales[alumno][1]}<br>
    ______Ausencias: ${5 - alumnosTotales[alumno][1]}<br>
    `;
    if (5 - alumnosTotales[alumno][1] > 3) {
        resultado += "suspendido<br>"
    } else {
        resultado += "aprobado<br>"
    }
    document.write(resultado)
}