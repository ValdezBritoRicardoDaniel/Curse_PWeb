var jugador1 = "piedra";
var jugador2 = "papel";


if (jugador2 == "piedra") {
    console.log("¡¡¡Empate!!!");
} 
else {
    if (jugador2 == "papel") {
        console.log("¡¡¡El Jugador 2 es el que gana!!!");
    } 
    else {
        if (jugador2 == "tijera") {
            console.log("¡¡¡El jugador 1 es el que gana!!!");
        }
    }
}