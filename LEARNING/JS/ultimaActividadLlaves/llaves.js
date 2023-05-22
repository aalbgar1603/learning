var contenedor = document.querySelector(".flex-container");

function crearLlave(nombre, modelo, precio) {
    let img = `<img src='./llave.png'>`;
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3 id="${modelo}">${modelo}</h3>`;
    precio = `<p>$${precio}</p>`;

    return [img, nombre, modelo, precio];
}

let fragmentoDeDocumento = document.createDocumentFragment();

for (var i = 1; i <= 20; i++) {
    let modeloRandom = Math.round(Math.random() * 10000);
    let precioRandom = Math.round(Math.random() * 10 + 30);
    let llave = crearLlave(`Llave ${i}`, `Modelo: ${modeloRandom}`, `${precioRandom}`);
    let div = document.createElement("DIV");
    div.classList.add(`item-flex`, `item-${i}`);
    div.innerHTML = llave.join("");
    fragmentoDeDocumento.appendChild(div);
}

contenedor.appendChild(fragmentoDeDocumento);
