const obtenerInformacion = (materia) => {
    const materias = {
      deporte: ["pedro", "juan", "perico", "lucia"],
      fisica: ["pedro", "laura", "juan", "perico"],
      seguridad: ["carmen", "lucia", "laura", "juan"],
    };
  
    if (materia !== undefined) {
      return [materias[materia], materia];
    }
  };
  
  const mostrarInfo = (materia) => {
    let informacion = obtenerInformacion(materia);
    let asignatura = informacion[1];
    let profesor = informacion[0].shift();
    let alumnos = informacion[0].join(", ");
    document.write(
      `La materia es: ${asignatura}<br>
      Profesor: ${profesor}<br>
      Alumnos: ${alumnos}<br><br>`
    );
  };
  
  // Mostrar todas las asignaturas
  document.write("Asignaturas disponibles:<br>");
  const materiasDisponibles = Object.keys(obtenerInformacion());
  for (let i = 0; i < materiasDisponibles.length; i++) {
    document.write(materiasDisponibles[i] + "<br>");
  }
  
  let materia = prompt("Dime la materia");
  mostrarInfo(materia);
  

// const cantidadDeClases = (alumno) => {
//     var informacion2 = obtenerInformacion();
//     let cantidadTotal = 0;
//     let clasesAsistiendo = [];
//     for (info in informacion2){
//         if (informacion2[info].includes(alumno)){
//             cantidadTotal++;
//             clasesAsistiendo.push(" "+ info)
//         }
//     }
//     return `${alumno} está en ${cantidadTotal} y son: ${clasesAsistiendo}.<br>`
// }
// document.write(cantidadDeClases("lucia"));
// document.write(cantidadDeClases("juan"));
// document.write(cantidadDeClases("perico"));
// document.write(cantidadDeClases("laura"));
