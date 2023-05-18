// const contenedor = document.querySelector(".contenedor");

// for (i = 0; i < 20; i++){
//     const item = document.createElement("LI");
//     item.innerHTML = "Este es un item de la lista";
//     contenedor.appendChild(item);
// }

// console.log(item);

////////////////////////////////////////

const contenedor = document.querySelector(".contenedor");
const fragmento = document.createDocumentFragment();

for (i = 0; i < 20; i++){
    const item = document.createElement("LI");
    item.innerHTML = "Este es un item de la lista";
    fragmento.appendChild(item);
}

contenedor.appendChild(fragmento)