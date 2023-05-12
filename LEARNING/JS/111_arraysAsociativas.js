// Objeto de películas
var peliculas = {
    "Pelicula 1": {
      nombre: "Pelicula 1",
      portada: "url_portada_1.jpg",
      sinopsis: "Sinopsis de la Pelicula 1."
    },
    "Pelicula 2": {
      nombre: "Pelicula 2",
      portada: "url_portada_2.jpg",
      sinopsis: "Sinopsis de la Pelicula 2."
    },
    "Pelicula 3": {
      nombre: "Pelicula 3",
      portada: "url_portada_3.jpg",
      sinopsis: "Sinopsis de la Pelicula 3."
    }
  };
  


// Función para añadir una película al objeto
function agregarPelicula(nombre, portada, sinopsis) {
    var pelicula = {
      nombre: nombre,
      portada: portada,
      sinopsis: sinopsis
    };
    peliculas[nombre] = pelicula;
  }
  
  // Ejemplo de uso de la función agregarPelicula
  agregarPelicula("Pelicula 4", "url_portada_4.jpg", "Sinopsis de la Pelicula 4.");
  
  // Mostrar las películas después de añadir una nueva
  for (var key in peliculas) {
    if (peliculas.hasOwnProperty(key)) {
      var pelicula = peliculas[key];
      document.write("<h1>" + pelicula.nombre + "</h1>");
      document.write("<img src='" + pelicula.portada + "' alt='Portada'>");
      document.write("<p>" + pelicula.sinopsis + "</p>");
    }
  }