/* var listaCompras = [
    "galletas", 
    "jamon", 
    "queso", 
    "leche", 
    "manzanas"
]; */

var lista = document.querySelector("ul");
var lista_dinamica = document.createElement("li");
lista_dinamica.innerText = "galletas";
lista.append(lista_dinamica)

var lista_dinamica = document.createElement("li");
lista_dinamica.innerText = "jamon";
lista.append(lista_dinamica)

var lista_dinamica = document.createElement("li");
lista_dinamica.innerText = "queso";
lista.append(lista_dinamica)

var lista_dinamica = document.createElement("li");
lista_dinamica.innerText = "leche";
lista.append(lista_dinamica)

var lista_dinamica = document.createElement("li");
lista_dinamica.innerText = "manzánas";
lista.append(lista_dinamica)


/* for (var i = 0; i < listaCompras.length; i++) {
var lista = document.querySelector("ul");
var lista_dinamica = document.createElement("li");
lista_dinamica.innerText = "galletas";
lista.append(lista_dinamica)
console.log(lista_dinamica[i]);
}; */



