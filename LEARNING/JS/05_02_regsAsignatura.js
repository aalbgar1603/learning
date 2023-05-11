const obtenerInformacion = [
    "deporte",
    ["pedro", "juan", "perico", "lucia"],
    "fisica",
    ["pedro", "laura", "juan", "perico"],
    "seguridad",
    ["carmen", "lucia", "laura", "juan"],
  ];
  
  const mostrarInfo = (materia) => {
    let asignatura;
    let alumnos;
  
    for (let i = 0; i < obtenerInformacion.length; i += 2) {
      if (obtenerInformacion[i] === materia) {
        asignatura = obtenerInformacion[i];
        alumnos = obtenerInformacion[i + 1].join(", ");
        break;
      }
    }
  
    if (asignatura && alumnos) {
      let profesor = obtenerInformacion[1];
      document.write(
        `La materia es: ${asignatura}<br>
        Profesor: ${profesor}<br>
        Alumnos: ${alumnos}<br><br>`
      );
    } else {
      document.write("La materia seleccionada no existe.<br><br>");
    }
  };
  
  // Mostrar todas las asignaturas
  document.write("Asignaturas disponibles:<br>");
  for (let i = 0; i < obtenerInformacion.length; i += 2) {
    document.write(obtenerInformacion[i] + "<br>");
  }
  
  let materia = prompt("Dime la materia");
  mostrarInfo(materia);
  