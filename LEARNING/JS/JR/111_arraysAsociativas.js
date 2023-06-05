// Objeto de películas
var peliculas = {
    "pluto": {
      nombre: "pluto",
      portada: "url_portada_1.jpg",
      sinopsis: "Sinopsis de la pluto"
    },
    "spiderman": {
      nombre: "spiderman",
      portada: "url_portada_2.jpg",
      sinopsis: "Sinopsis de la spiderman"
    },
    "F&F": {
      nombre: "F&F",
      portada: "url_portada_3.jpg",
      sinopsis: "Sinopsis de la F&F."
    }
  };
///////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  FUNCIONES  /////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

///////////// BUSCAR PELICULA
  function buscarPelicula() {
    let pelicula = prompt("Dame el nombre de la peli");

    // Comprobar si se ha cancelado el prompt
  if (pelicula === null) {
    // El usuario ha cancelado
    alert("Operación cancelada");
    return; // Salir de la función
  }

    if ( peliculas.hasOwnProperty(pelicula)) {
      document.write(`${peliculas[pelicula].nombre}<br>`);
      document.write(`${peliculas[pelicula].portada}<br>`);
      document.write(`${peliculas[pelicula].sinopsis}<br>`);
    } else {
      alert("Eso no existe");
      buscarPelicula();
    }
    
  }


 ///////////// AGREGAR PELICULA
function agregarPelicula(nombre, portada, sinopsis) {
    var pelicula = {
      nombre: nombre,
      portada: portada,
      sinopsis: sinopsis
    };
    peliculas[nombre] = pelicula;
  }

///////////// MOSTRAR TODAS LAS PELICULAS
function listadePeliculas() {
  for (var key in peliculas) {
    if (peliculas.hasOwnProperty(key)) {
      var pelicula = peliculas[key];
      document.write("<h1>" + pelicula.nombre + "</h1>");
      document.write("<img src='" + pelicula.portada + "' alt='Portada'>");
      document.write("<p>" + pelicula.sinopsis + "</p>");
    }
  }
}

function iniciarFunciones() {
  // Obtener la opción del usuario a través de un prompt
var opcion = prompt("Seleccione una opción:\n1. Buscar\n2. Agregar pelicula\n3. Listado de peliculas");
  if (opcion === null) {
    // El usuario ha cancelado
    alert("Operación cancelada");
    return; // Salir de la función
  }
// Convertir la opción a un número entero
opcion = parseInt(opcion);

// ELEGIR QUE FUNCION EJECUTAR
switch (opcion) {
  case 1:
    // Llamar a la función 1
    buscarPelicula();
    break;
  case 2:
    // Llamar a la función 2
    var nombre = prompt("Ingrese el nombre de la película:");
    var portada = prompt("Ingrese la URL de la portada de la película:");
    var sinopsis = prompt("Ingrese la sinopsis de la película:");
    
    agregarPelicula(nombre, portada, sinopsis);
    listadePeliculas();
    break;
  case 3:
    // Llamar a la función 3
    listadePeliculas();
    break;
  default:
    // Opción inválida
    alert("Opción inválida. Por favor, seleccione una opción válida.");
    iniciarFunciones();
    break;
}
  // Ejemplo de uso de la función agregarPelicula
  agregarPelicula("Pelicula 4", "url_portada_4.jpg", "Sinopsis de la Pelicula 4.");
}

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

iniciarFunciones();