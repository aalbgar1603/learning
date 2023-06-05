var free = false;

function validarEdad() {
    var time = prompt("que hora es?");
    let edad = prompt("Dime tu edad");
    if (edad < 18) {
        return "ERES MENOR DE EDAD";
    } else {
        if ( time >= 2 && time < 7 && free === false ) {
            free = true;
            alert(`Son las ${time}. Podes pasar gratis`);
        } else {
            alert(`Son las ${time}. Podes pasar pero pagas`);
        }
    }
}

validarEdad()
validarEdad()
validarEdad()
validarEdad()
