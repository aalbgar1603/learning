// seleccionamos el contenedor donde iremos metiendo cada llave
var contenedor = document.querySelector(".flex-container");

function crearLlave(nombre,modelo,precio) {
    let img = `<img src='./llave.png'>`;
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3 id="${modelo}">${modelo}</h3>`;
    precio = `<p>$${precio}</p>`;

    return [img,nombre,modelo,precio];
}

/////////////////////////////////////////////////////////////////////
// Creamos un fragmento del documento index para poder devolver codigo
// que pueda interpretar el navegador. 
// Porque si intentaramos añadir cada div al document haciendo un .innetHTML
// este añadiría los tipos de elementos que estamos metiendo y no interpretaria
// el codigo html. 
// Por esa razón, al final del for, introducimos cada div dentro del fragmento
// asignandolos como hijos de este con .appendChild.

let fragmentoDeDocumento = document.createDocumentFragment();

for (var i = 1; i <= 20; i++) {
    let modeloRandom = Math.round(Math.random() * 10000);
    let precioRandom = Math.round(Math.random() * 10 + 30);
    let llave = crearLlave(`Llave ${i}`,`Modelo: ${modeloRandom}`,`${precioRandom}`);
    let div = document.createElement("DIV");
    div.tabIndex = i;
    div.classList.add(`item-flex`,`item-${i}`);
    div.innerHTML = llave.join(""); //para que ignore las comas. 
    fragmentoDeDocumento.appendChild(div);
}

contenedor.appendChild(fragmentoDeDocumento);