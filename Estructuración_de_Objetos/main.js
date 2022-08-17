const persona = {
    nombre: "Luke",
    apellido: "Skywalker"
};

// Acceder a sus valores
// Notación punto
console.log(persona.nombre);
// Notación corchete
console.log(persona["nombre"]);

// Crear una personalidad rango
persona.rango = "Maestro Jedi";
console.log(persona);

// crear una variable con el nombre
const nombrePersona = persona.nombre
console.log(nombrePersona);

//Desestructuración de Objetos
const {nombre, apellido} = persona;
console.log(nombre);
console.log(apellido);