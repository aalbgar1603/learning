// PREGUNTO CANTIDAD DE ALUMNOS PARA DEFINIR TAMAÑO DEL FOR QUE PREGUNTA SUS NOMBRES
let cantidadAlumnos = prompt(`Cantidad de alumnos`);
let listaAlumnos = [];

// GUARDO SUS NOMBRES
for (let i = 0; i < cantidadAlumnos; i++) {
    listaAlumnos[i] = [prompt(`Nombre del alumno ${i + 1}`), 0];
}

// CREO LA FUNCION QUE PASA LISTA POR CADA ALUMNO Y LO GUARDA EN LA RAID
const tomarAsistencia = (nombreAlumno, posicionAlumno) => {
    let asistencia = prompt(`¿El alumno ${nombreAlumno} está presente? (P para presente, A para ausente)`);
    if (asistencia.toUpperCase() === "P") {
        listaAlumnos[posicionAlumno][1]++;
    }
}

// EJECUTO LA FUNCION
const cantidadDias = 5;
for (let dia = 0; dia < cantidadDias; dia++) {
    for (let posicionAlumno in listaAlumnos) {
        tomarAsistencia(listaAlumnos[posicionAlumno][0], posicionAlumno);
    }
}

// MUESTRO RESULTADOS
for (let posicionAlumno in listaAlumnos) {
    let resultado = `${listaAlumnos[posicionAlumno][0]}:<br>
    ______Presentes: ${listaAlumnos[posicionAlumno][1]}<br>
    ______Ausencias: ${cantidadDias - listaAlumnos[posicionAlumno][1]}<br>`;
    if (cantidadDias - listaAlumnos[posicionAlumno][1] > 3) {
        resultado += "Suspendido<br>";
    } else {
        resultado += "Aprobado<br>";
    }
    document.write(resultado);
}