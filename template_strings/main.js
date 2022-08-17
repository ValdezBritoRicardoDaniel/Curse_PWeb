const nombreComillasDobles = "Hola";
const nombreComillassimples = 'Hola';

// Alt + 96
const nombreComillasInvertidas = `Hola `

// Interpolación de variables
const saludar = (nombre) => {
    return `hola ${nombre}`;
}


// 3 + 5 = 8
// "hola" + "luke" = "hola luke"
const sumar  = (numero1, numero2) => {
    console.log(`La suma es ${numero1 + numero2}`);
    console.log("La suma es " + (numero1 + numero2));
}
sumar(3, 5);



const html = `
    <h1>Hola</h1>
    <p>Soy un parrafo</p>
`;