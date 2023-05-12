// Array con la información de las asignaturas y los alumnos
const obtenerInformacion = [
  "deporte",                    // Asignatura
  ["pedro", "juan", "perico", "lucia"],  // Alumnos
  "fisica",                     // Asignatura
  ["pedro", "laura", "juan", "perico"],  // Alumnos
  "seguridad",                  // Asignatura
  ["carmen", "lucia", "laura", "juan"]    // Alumnos
];

// Función para mostrar la información de una materia específica
const mostrarInfo = (materiaAComprobar, alumnoAComprobar) => {
  let asignatura;   // Variable para almacenar la asignatura encontrada
  let alumnos;      // Variable para almacenar la lista de alumnos

  // Recorrer el array de información
  for (let i = 0; i < obtenerInformacion.length; i += 2) {
    if (obtenerInformacion[i] === materiaAComprobar) {   // Si la asignatura coincide
      asignatura = obtenerInformacion[i];      // Almacenar la asignatura
      alumnos = obtenerInformacion[i + 1].join(", ");  // Unir los alumnos en una cadena separada por comas
      break;  // Salir del bucle
    }
  }

  if (asignatura && alumnos) {   // Si se encontró la asignatura y la lista de alumnos
    let indiceAsignatura = obtenerInformacion.indexOf(asignatura);   // Obtener el índice de la asignatura
    let profesor = obtenerInformacion[indiceAsignatura + 1][0];      // Obtener el nombre del profesor
    let contadorAlumnos = obtenerInformacion[indiceAsignatura + 1].length; // Obtener el número de alumnos

    document.write(
      `La materia es: ${asignatura}<br>
      Profesor: ${profesor}<br>
      Alumnos: ${alumnos}<br>
      Total de Alumnos: ${contadorAlumnos}<br><br>`
    );
  } else {
    document.write("No se encontró información para la materia ingresada.<br><br>");
  }
};

// Mostrar todas las asignaturas disponibles
let listadoAsignaturas = obtenerInformacion.filter((element, index) => index % 2 === 0).join(", ");
document.write(`Las asignaturas disponibles son: ${listadoAsignaturas}.<br><br>`);

// Solicitar al usuario una materia y un alumno
let materiaAComprobar = prompt("Dime la materia");
let alumnoAComprobar = prompt("Qué alumno quieres ver si está inscrito");
mostrarInfo(materiaAComprobar, alumnoAComprobar);  // Mostrar la información de la materia ingresada
