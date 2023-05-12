const arrayAsignatura_y_Alumnos = [
    "mates", ["pedro","juan","lucia","maria"],
    "fisica", ["pedro","perico","juan","lucia"],
    "religion", ["pedro","maria","perico","juan"]
];

var arrayAsignaturas = [];
var nombreProfe;
var listAlumnos = [];

function fListarAsignaturas() {
    for (let i = 0; i < arrayAsignatura_y_Alumnos.length; i += 2) {
        arrayAsignaturas.push(arrayAsignatura_y_Alumnos[i]);
    }
    return arrayAsignaturas;
}

arrayAsignaturas = fListarAsignaturas();
document.write(`<br>Las asignaturas disponibles son: ${arrayAsignaturas.join(", ")}.`);

var asignatura = prompt("Ingrese la asignatura:");
var indice;
function fNombreProfe_y_Alumnos(asignatura) {
    indice = arrayAsignatura_y_Alumnos.indexOf(asignatura);
    if (indice !== -1) {
        indice += 1;
        nombreProfe = arrayAsignatura_y_Alumnos[indice][0];
        listAlumnos = arrayAsignatura_y_Alumnos[indice].slice(1);
        document.write(`<br>Asignatura: ${asignatura}.`);
        document.write(`<br>El nombre del profe es: ${nombreProfe}.`);
        document.write(`<br>La lista de alumnos es: ${listAlumnos.join(", ")}.`);
    } else {
        document.write(`<br>La asignatura ${asignatura} no existe.`);
    }
}

fNombreProfe_y_Alumnos(asignatura);

var alumno = prompt("Ingrese el nombre del alumno:");
function buscarAlumno(alumno) {
    if (listAlumnos.includes(alumno)) {
        document.write(`<br>${alumno} ya se ha suscrito.`);
    } else if (listAlumnos.length === 4) {
        document.write(`<br>Cantidad máxima (4) alcanzada.`);
    }
}

buscarAlumno(alumno);
