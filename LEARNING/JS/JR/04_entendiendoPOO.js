//Creamos la clase
class obAnimal {
    //le decimos que objetos requerirá marca/ruedas/motor
    constructor(raza_A, edad_A, patas_A) {
        //le decimos a cada atributo de donde cogerá su valor
        this.raza = raza_A;
        this.edad_A = edad_A;
        this.patas = patas_A;
        this.descripcion = `Es un ${this.raza} con ${this.patas} patas y ${this.edad_A} años.`;
    }
    verInfo() {
        document.write(this.descripcion + `<br>`);
    }
    playSonido() {
        if (this.raza == gato) {
            document.write("...meow!");
        } else if (this.raza == pajaro){
            document.write("...pio!");
        } else {
            document.write("nidea");
        }
    }
}

//Creamos otra clase para probar la herencia y el polimorfismo
class obPerro extends obAnimal {
    //en el constructor le decimos los atributos que tendrá
    constructor(raza_A,edad_A,pelo_B) {
        super(raza_A,edad_A);
        this.pelo = pelo_B;
        this.descripcion = `Este es el ${raza_A} con ${this.edad_A} años y pelo ${this.pelo}`;
    }  
}

//HASTA ESTE PUNTO SE DOS FORMAS DE CREARLO
//La primera... Poniendo cada valor fijo en las posiciones de los atributos
let perro1 = new obAnimal("pitbull",8,4);
//La segunda... Pidiendolo por prompts
let perro2 = new obAnimal(prompt("Dime la raza"),prompt("dime la edad"),prompt("dime las patas"));
//Esta es para probar un objeto con herencias
let perroOficial = new obPerro("perro",40,"largo");

/////////////////////////
perro1.verInfo();
perro2.verInfo();
perro1.playSonido();
perroOficial.verInfo();

///////MINUTO 04:33:09