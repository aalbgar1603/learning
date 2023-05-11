const obtenerInformacion = (materia)=>{
    materias = {
        deporte: ["pedro","juan","perico","lucia"],
        fisica: ["pedro","laura","juan","perico"],
        seguridad: ["carmen","lucia","laura","juan"]
    }

    if (materia !== undefined){
        return [materias[materia], materia];
    }
}

    let informacion = obtenerInformacion(materias)
    // let alumnos = informacion[0].join(", "); // Une los nombres de los alumnos separados por comas
    let asignatura = informacion[1];
    let profesor = informacion[0].shift();
    let alumnos = informacion[0].join(", ");
    // alert(`La asignatura es ${informacion.pop()}, el profesor es ${informacion.shift()} y los alumnos: ${informacion}`)
    document.write(
        `La materia es: ${asignatura}<br>
        Profesor: ${profesor}<br>
        Alumnos: ${alumnos}<br><br>`);



const cantidadDeClases = (alumno) => {
    var informacion2 = obtenerInformacion();
    let cantidadTotal = 0;
    let clasesAsistiendo = [];
    for (info in informacion2){
        if (informacion2[info].includes(alumno)){
            cantidadTotal++;
            clasesAsistiendo.push(" "+ info)
        }
    }
    return `${alumno} está en ${cantidadTotal} y son: ${clasesAsistiendo}.<br>`
}
document.write(cantidadDeClases("lucia"));
document.write(cantidadDeClases("juan"));
document.write(cantidadDeClases("perico"));
document.write(cantidadDeClases("laura"));
