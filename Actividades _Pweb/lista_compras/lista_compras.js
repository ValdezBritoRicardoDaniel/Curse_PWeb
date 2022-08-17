for (var i = 1; 1 <= 10; i++) {
    console.log()
}

var ListaCompras = [
    "Manzana",
    "Jabon",
    "Agua",
    "Azucar",
    "Platos",
];
for (var i = 0; i < ListaCompras.length; i++) {
    console.log(ListaCompras[i]);
}

for (var producto of ListaCompras) {
    console.log(producto);
};

var contador = 1;
while (contador <= 10) {
    console,log(contador);
    contador++;
}

var índice = 0;
while (índice < ListaCompras.length) {
    console.log(ListaCompras[índice]);
    índice++;
}