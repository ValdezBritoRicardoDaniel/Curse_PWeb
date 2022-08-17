// var usa un scope global y local
// let usa un scope 
// 


var nombre = "Anettita Díaz";
//Mala Practica al renombrar nuevamente la variable
var nombre = "Adriana Uicab";
console.log(nombre);

let nombre2 = "Anettita Díaz";
// No se puede redeclarar una variable existente
//let nombre2 = "Adrana Uicab";
console.log(nombre2);


for (var i = 1; i <= 5; i++) {
    console.log(i);
}
console.log(i);

//Let tiene un alcance de bloque
//Solamente vive dentro del for
for (let incremento = 1; incremento <= 5; incremento++) {
    console.log(incremento);
}
// La variable incremento ya no existe
// console.log(incremento);


// Aqui tiene un scope global
let numero = 50;
if (true) {
    // Aqui tiene un scope de bloque
    // solo existe dentro del if
    let numero = 10;
    console.log(numero);
}
console.log(numero);


const numero3 = 150;
// su valor no cambia , esto manda error
// numero3 = 200
console.log(numero3);

const numeros = [1,2,3,4,5];
// No se puede reasignar un nuevo valor a una constante
// numeros = [6,7,8,9,10]


// Si puede agregar o quitar valores
numeros.push(6);
numeros.push(7);
console.log(numeros);



const nombres = ["Anette", "Adriana"];
nombres.push("Doroty")
console.log(nombres);

const arreglos = [1, "hola", true, [1,2,3,4]];
console.log(arreglos);
