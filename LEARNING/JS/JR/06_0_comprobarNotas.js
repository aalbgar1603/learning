//// PROGRAMA PARA COMPROBAR SI SE HA APROBADO LAS ASIGNATURAS
const NOTAS = {
    "fisica": {
        nombre: "fisica",
        faltas: 90,
        promedio: 7,
        tareas: 1
    },
    "matematica": {
        nombre: "matematica",
        faltas: 84,
        promedio: 8,
        tareas: 2
    },
    "logica": {
        nombre: "logica",
        faltas: 92,
        promedio: 5,
        tareas: 4
    },
    "quimica": {
        nombre: "quimica",
        faltas: 81,
        promedio: 9,
        tareas: 3
    }
};

const asistencias = ()=> {
    for (let asignatura in NOTAS) {
        // 
        console.log(NOTAS[asignatura].nombre.toUpperCase())
        if (NOTAS[asignatura].faltas < 90) {
            console.log(`Faltas : `);
            console.log(`%c   Vas bien, tranki`,`color: red`);
        } else {
            console.log(`Faltas : `);
            console.log(`%c   Cuidado, bro`,`color: green`);
        }
        // 
        if (NOTAS[asignatura].promedio >= 7) {
            console.log(`Promedio:`);
            console.log(`%c   Vas bien, tranki`,`color: red`);
        } else {
            console.log(`Promedio:`);
            console.log(`%c   Cuidado, bro`,`color: green`);
        }
        // 
        if (NOTAS[asignatura].tareas >= 3) {
            console.log(`Tareas: `);
            console.log(`%c   Vas bien, tranki`,`color: red`);
        } else {
            console.log(`Tareas: `);
            console.log(`%c   Cuidado, bro`,`color: green`);
        }
    }
}

asistencias()