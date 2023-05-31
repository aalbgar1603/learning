var LAVADORAS = {
    "bosh": {
        modelo: "mk456",
        rpm: "5000",
        eficiencia: "A"
    },
    "lg": {
        modelo: "mk686",
        rpm: "8000",
        eficiencia: "A"
    },
    "balay": {
        modelo: "mk4c56",
        rpm: "1000",
        eficiencia: "A"
    },
    "sony": {
        modelo: "massk456",
        rpm: "2000",
        eficiencia: "A"
    },
};



function buscarLavadora1() {
    var cont1 = document.getElementById("cont1");
    var inputE1 = document.getElementById("inputText1").value;
    var div = document.createDocumentFragment();
    
    var elemento = document.createElement("div");
    elemento.innerHTML = `Modelo: ${LAVADORAS[inputE1].modelo} <hr> RPM: ${LAVADORAS[inputE1].rpm} <hr> Eficiencia: ${LAVADORAS[inputE1].eficiencia}`;
    
    div.appendChild(elemento);
    cont1.innerHTML = "<hr>";
    cont1.appendChild(div);
}

function buscarLavadora2() {
    var cont2 = document.getElementById("cont2");
    var inputE2 = document.getElementById("inputText2").value;
    var div = document.createDocumentFragment();
    
    var elemento = document.createElement("div");
    elemento.innerHTML = `Modelo: ${LAVADORAS[inputE2].modelo} <hr> RPM: ${LAVADORAS[inputE2].rpm} <hr> Eficiencia: ${LAVADORAS[inputE2].eficiencia}`;
    
    div.appendChild(elemento);
    cont2.innerHTML = "<hr>";
    cont2.appendChild(div);
}
