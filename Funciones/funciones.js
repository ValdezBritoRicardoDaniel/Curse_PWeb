
function saludar() {
    console.log("Hola desde la función saludar");
}

//LLamada de funciones
saludar();
//Función expresiva
var saludar2 = function() {
    console.log("Hola desde la función saludar2")
}

saludar();


//Funciones nativas
var numeroEntero = parseInt("20");
console.log(numeroEntero);
console.log(typeof numeroEntero);
if (isNaN(numeroEntero)) {
    console.log(numeroEntero = "no es un numero");
} else {
    console.log(numeroEntero = "es un numero");
}

var numeroflotante = parseFloat("10.7");
console.log(numeroflotante);
console.log(typeof numeroflotante);

var numeroDiez = 10;
var cadenaDiez = numeroDiez.toString();
console.log(cadenaDiez);
console.log(typeof cadenaDiez);


function saludo(nombre, apellido) {
    console.log(`Hola ${nombre} ${apellido}`);
}

saludo("Ahsoka", "Tano");


//Parametros por defecto
saludo();

function saludo2(nombre = "Desconocido", apellido = "") {
    console.log(`Hola ${nombre} ${apellido}`);
}

saludo2("Ahsoka", "Tano");
saludo2("Makoto");
saludo2();


//
function sumar(numero1, numero2) {
    console.log("Hola desde función sumar")
    return numero1 + numero2;

    //Al estar despues del RETURN, este cofigo no se va a ejecurar
    console.log("Hola despues del Return")
}

var resultado = sumar(3, 5);
console.log(`La suma es ${resultado}`);