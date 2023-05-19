// var container = document.querySelector(".flex-container");

// function crearLlave(nombre,modelo,precio) {
//     let img = `<img src='./llave.png'>`;
//     nombre = `<h2>${nombre}</h2>`;
//     modelo = `<h3>${modelo}</h3>`;
//     precio = `<p>$${precio}</p>`;

//     return [img,nombre,modelo,precio];
// }

// const llave = crearLlave("Llave 1","nueva","10");

// container.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
/////////////////////////////////////////////////////////////////////

var listaModelosRandom = []; // Array para almacenar los números generados

for (var i = 0; i < 20; i++) {
    var modeloRandom = Math.random() * 10000;
    var modeloRandom = Math.random() * 10000;
    listaModelosRandom.push(modeloRandom); // Agregar el número generado al array
}
    document.write(listaModelosRandom.join("<br>"));

