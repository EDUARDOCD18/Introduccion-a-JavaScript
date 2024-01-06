"use strict";

// Array Methods
const meses = ["enero", "febrero", "marzo", "abril", "mayo"];

const carrito = [
  { nombre: 'Monitor Gamer de 20"', precio: 450 },
  { nombre: "Teclado Gamer", precio: 150 },
  { nombre: "Silla Gamer", precio: 200 },
  { nombre: "Mouse Gamer", precio: 20 },
  { nombre: "Mouse Pad Gamer", precio: 20 },
  { nombre: "Cascos Gamer", precio: 150 },
  { nombre: "Escritorio Gamer", precio: 300 },
];

// forEach para buscar un elemento dentro de un arreglo
meses.forEach(function (mes) {
  if (mes == "marzo") {
    console.log("Existe");
  }
});

// .includes() para buscar un elemento dentro de un arreglo
let resultado = meses.includes("marzo");
console.log(resultado);

/* Cuando el arreglo tiene objeto NO se recomienda usar .includes() */

/* .some() para buscar un elemento dentro de un arreglo de objetos 
        variable = arreglo.some(function(parametro){
            return parametro.propiedad === valor
        })
*/

resultado = carrito.some(function (producto) {
  return producto.nombre === "Mouse Gamer";
});
console.log(resultado);

// .reduce para sumar valores de objetos dentro de un arreglo
    /* variable = arreglo.reduce(function(valorPrevio, valorActual){
            return valorPrevio + valorActual.propiedadDelArreglo;
    }, valorInicial); 
*/
resultado = carrito.reduce(function (total, producto) {
  return total + producto.precio;
}, 0);

console.log(resultado);

/* .filter para filtrar los elementos segun un valor determinado.
        variable = arreglo.filter(function(parametro){
            return parametro.propiedadDelArreglo > valor
        })
*/

resultado = carrito.filter(function(producto){
    return producto.precio > 250
})

console.table(resultado);
