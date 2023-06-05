class Calculadora { 
    constructor(){};
    sumar(num1,num2){
        return parseInt(num1) + parseInt(num2);
    }
    restar(num1,num2){
        return parseInt(num1) - parseInt(num2);
    }
    dividir(num1,num2){
        return parseInt(num1) / parseInt(num2);
    }
    multiplicar(num1,num2){
        return parseInt(num1) * parseInt(num2);
    }
    potenciar(num,exponente){
        return parseInt(num) ** parseInt(exponente);
    }
    raizCuadrada(num){
        return Math.sqrt(num);
    }
    raizCubica(num){
        return Math.cbrt(num);
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////
// Creo la calculadora
const calculadora = new Calculadora();
///////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////
// Pregunto la operación que quiere el usuario
alert("Que operacion hacemos mi rey");
let operacion = prompt(`1 Sumar; 2 Restar; 3 Dividir; 4 Multiplicar; 5 Potenciar; 6 Raiz Cuadrada; 7 Raiz Cubica`);
///////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////
// Llama a cada objeto de la clase dependiendo de la operación
let numero1 = prompt("Primer numero para operar:");
let numero2 = prompt("Segundo Numero para operar: [en caso de calcular raiz, dejar en blanco]");
if (operacion == 1) {
    alert(calculadora.sumar(numero1, numero2));
} else if (operacion == 2) {
    alert(calculadora.restar(numero1, numero2));
} else if (operacion == 3) {
    alert(calculadora.dividir(numero1, numero2));
} else if (operacion == 4) {
    alert(calculadora.multiplicar(numero1, numero2));
} else if (operacion == 5) {
    alert(calculadora.potenciar(numero1,numero2));
} else if (operacion == 6) {
    alert(calculadora.raizCuadrada(numero1));
} else if (operacion == 7) {
    alert(calculadora.raizCubica(numero1));
} else { alert("Tontito, que eres un tontito") };
///////////////////////////////////////////////////////////////////////////////////////////////////////