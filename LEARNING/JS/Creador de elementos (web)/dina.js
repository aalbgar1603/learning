class Crear {
    constructor() {};
    elemento(){
        var mensaje = document.getElementById("mensajeInput").value;
        var etiqueta = document.getElementById("etiquetaInput").value;
        var contenedor = document.getElementById("contenedor");
        if (etiqueta == "li" || etiqueta == "ol" || etiqueta == "ul") {
            var contenido = document.createElement("UL");
            let li = document.createElement("LI");
            li.innerHTML = mensaje;
            contenido.appendChild(li);
        }
        var contenido = document.createElement(etiqueta);
        contenido.innerHTML = mensaje;
        contenedor.appendChild(contenido)
    }
    h1(){
        this.mensaje = document.getElementById("inputText1").value;
        var contenedor = document.getElementById("contenedor");
        var contenido = document.createElement("H1");
        contenido.innerHTML = this.mensaje;
        contenedor.appendChild(contenido)
    }
    h2(){
        this.mensaje = document.getElementById("inputText2").value;
        var contenedor = document.getElementById("contenedor");
        var contenido = document.createElement("H2");
        contenido.innerHTML = this.mensaje;
        contenedor.appendChild(contenido)
    }
    h3(){
        this.mensaje = document.getElementById("inputText").value;
        var contenedor = document.getElementById("contenedor");
        var contenido = document.createElement("H3");
        contenido.innerHTML = this.mensaje;
        contenedor.appendChild(contenido)
        
    }
}

var creador = new Crear();
