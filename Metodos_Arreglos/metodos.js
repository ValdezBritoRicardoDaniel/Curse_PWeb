var productos = [
    {nombre: "Monitor", precio: 5000, cantidad: 3},
    {nombre: "Teclado", precio: 1300, cantidad: 15},
    {nombre: "Audifonos", precio: 1000, cantidad: 7},
    {nombre: "cargador", precio: 400, cantidad: 20}
];


//Metodo FILTER
var productosFiltrados = productos.filter(function(producto) {
    console.log(producto);
    return productos.cantidad > 10;
});
console.log(productosFiltrados);


//Metodo FIND
var nombreProductos = productos.map(function(producto) {
    return producto.nombre;
});
console.log(nombreProductos);

var productoEncontrado = productos.find(function(producto) {
    return producto.nombre == "Monitor;"
});


//Metodo forEACH
productos.forEach(function(producto) {
    console.log(producto),
});

//Metodo SOME
var productosSinExistencia = productos.some(function(producto){
    return producto.
});