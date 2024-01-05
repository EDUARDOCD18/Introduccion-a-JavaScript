// 118 - Arrays o Arreglos en JS
"use strict";

const numeros = [10, 20, 30, 40, 50];
// console.table(numeros);
console.log(numeros);

// Definir arreglos por constructor
const meses = new Array("enero", "febreo", "marzo", "abril", "mayo");
console.log(meses);
// console.table(meses);

const arreglo = [
  "hola",
  10,
  true,
  "si",
  null,
  { nombre: "javier", trabajo: "programador" },
  [1, 2, 3],
];

// Acceder a los valores de un arreglo
console.log(numeros[1]);
console.log(meses[3]);
console.log(arreglo[6]);

// Conocer la extensión de un arreglo
console.log(meses.length);

numeros.forEach(function(numero){
    console.log(numero);
})