
function saludar() {
    console.log("Hola desde saludar()");
}

//llamar a la funcion
saludar();

// fincion expresiva
const saludar2 = function () {
    console.log("Hola desde saludar2");
}

saludar2();

// Arrow function o funciones de flecha
const saludarFlecha = () => {
    console.log("Hola desde saludarFlecha()");
}
saludarFlecha();

const saludarFlecha2 = (nombre) => {
    console.log("Hola " + nombre + " desde saludarFlecha2");
}
saludarFlecha2("Smith");

const retornasaludo = (nombre) => "hola" + nombre;
const retornasaludo2 = function (nombre) {
    return "hola" + nombre;
}

const saludo = retornasaludo(" Mia");
console.log(saludo);

const numeros = [1,2,3,4,5];
const numerosPorDos = numeros.map((numero) => numero = 25);
console.log(numerosPorDos);