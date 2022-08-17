function SumarArreglos(numeros) {
    var suma = 0;
    
     for (var numero of numeros) {
         suma = suma + numero;
     }
    return suma;
}

var numeros = [1,3,5,7,9];
var resultado = SumarArreglos(numeros);
console.log(`La Suma de los Valores es ${resultado}`)

console.log(`La suma es ` + SumarArreglos([1,3,1]));

