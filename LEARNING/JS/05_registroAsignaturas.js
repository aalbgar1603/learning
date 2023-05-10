const obtenerInformacion = (materia)=>{
    materias = {
        deporte: ["pedro","juan","perico","manolo"],
        fisica: ["pedro","lucia","maria","perico","pajaro"],
        seguridad: ["carmen","sofia","laura"]
    }

    if (materia !== undefined){
        return [materias[materia], materia];
    }
}

    let informacion = obtenerInformacion("seguridad")
    // let alumnos = informacion[0].join(", "); // Une los nombres de los alumnos separados por comas
    let asignatura = informacion[1];
    let profesor = informacion[0].shift();
    let alumnos = informacion[0].join(", ");
    // alert(`La asignatura es ${informacion.pop()}, el profesor es ${informacion.shift()} y los alumnos: ${informacion}`)
    document.write(
        `La materia es: ${asignatura}<br>
        Profesor: ${profesor}<br>
        Alumnos: ${alumnos}`);