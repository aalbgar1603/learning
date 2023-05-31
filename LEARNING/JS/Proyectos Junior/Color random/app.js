function generarCodigoHexadecimal() {
    var caracteres = '0123456789ABCDEF';
    var codigo = '#';
    for (var i = 0; i < 6; i++) {
      codigo += caracteres[Math.floor(Math.random() * 16)];
    }
    return codigo;
}

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener("click", function cambiarColor() {
    var codigo = generarCodigoHexadecimal();
    document.body.style.backgroundColor = codigo;
    color.textContent = codigo;
})
