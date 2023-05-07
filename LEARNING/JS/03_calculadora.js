const sumar = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
}
const restar = (num1, num2) => {
    return parseInt(num1) - parseInt(num2);
}
const dividir = (num1, num2) => {
    return parseInt(num1) / parseInt(num2);
}
const multiplicar = (num1, num2) => {
    return parseInt(num1) * parseInt(num2);
}

alert("Que operacion hacemos mi rey")
let operacion = prompt("1 Sumar<br>2 Restar<br>3 Dividir<br>4 Multiplicar")

if (operacion == 1) {
    let numero1 = prompt("Dime el primer numero")
    let numero2 = prompt("ahora el segundo")
    alert(sumar(numero1, numero2))
} else if (operacion == 2) {
    let numero1 = prompt("Dime el primer numero")
    let numero2 = prompt("ahora el segundo")
    alert(restar(numero1, numero2))
} else if (operacion == 3) {
    let numero1 = prompt("Dime el primer numero")
    let numero2 = prompt("ahora el segundo")
    alert(dividir(numero1, numero2))
} else if (operacion == 4) {
    let numero1 = prompt("Dime el primer numero")
    let numero2 = prompt("ahora el segundo")
    alert(multiplicar(numero1, numero2))
} else { alert("Tontito, que eres un tontito") }