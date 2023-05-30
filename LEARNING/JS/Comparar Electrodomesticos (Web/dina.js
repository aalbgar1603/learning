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
const botones1 = document.getElementById("electro1")
const botones2 = document.getElementById("electro2")
function buscarLavadora1(botones1) {
    var cont_elec1 = document.getElementById("electro1");
    var inputE1 = document.getElementById("inputText1").value;
    var div = document.createDocumentFragment();
    
    var elemento = document.createElement("div");
    elemento.innerHTML = `Modelo: ${LAVADORAS[inputE1].modelo} <br> RPM: ${LAVADORAS[inputE1].rpm} <br> Eficiencia: ${LAVADORAS[inputE1].eficiencia}`;
    
    div.appendChild(elemento);
    cont_elec1 = "";
    cont_elec1.innerHTML(botones1);
    cont_elec1.appendChild(div);
}

function buscarLavadora2(botones2) {
    var cont_elec2 = document.getElementById("electro2");
    var inputE2 = document.getElementById("inputText2").value;
    var div = document.createDocumentFragment();
    
    var elemento = document.createElement("div");
    elemento.innerHTML = `Modelo: ${LAVADORAS[inputE2].modelo} <br> RPM: ${LAVADORAS[inputE2].rpm} <br> Eficiencia: ${LAVADORAS[inputE2].eficiencia}`;
    
    div.appendChild(elemento);
    cont_elec2 = "";
    cont_elec2.innerHTML(botones2);
    cont_elec2.appendChild(div);
}


