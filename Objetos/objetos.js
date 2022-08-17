var persona = {
    nombre: "Elena",
    apellido: "Smith",
    estatura: 1.68,
    peso: 68,
    rango: "Contramaestre",
    aprencices: ["Grogu", "Ben Solo", "Rey"],
    nombreCompleto: function () {
        console.log(`${this.nombre} ${this.apellido}`)
    }
};

console.log(persona.nombre);
console.log(persona.apellido);

console.log(persona ["nombre"]);
persona.nombreCompleto();