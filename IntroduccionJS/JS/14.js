// 118 - Arrays o Arreglos en JS
"use strict";

const numeros = [10, 20, 30, 40, 50];
console.table(numeros);

// Definir arreglos por constructor
const meses = new Array("enero", "febreo", "marzo", "abril", "mayo");
console.log(meses);

/*Agregar valores al final del arreglo.
    Sintaxis:
        arreglo.push(valor);
*/

// numeros[5] = 60
numeros.push(60);
numeros.push(70);
numeros.push(80, 90, 100);
numeros.push("fin");
console.table(numeros);

/*Agregar valores al inicio del arreglo.
    Sintaxis:
        arreglo.unshift(valor);
*/
numeros.unshift(-1, -2, -3);
console.table(numeros);

/*Eliminar el último elemento del arreglo.
    Sintaxis:
        arreglo.pop();
*/
numeros.pop();
console.table(numeros);

/*Eliminar el primer elemento del arreglo.
    Sintaxis:
        arreglo.shift();
*/
numeros.shift();
console.table(numeros);

/*Eliminar elemento específico.
    Sintaxis:
        arreglo.splice(indece_de_partida, numero_de_elementos_a_eliminar);
        ejm: arreglo.splice(2, 1);
*/
// meses.splice(2, 1);
// console.table(meses);

/** Se recomienda No modificar el array original. Se recomienda crear uno nuevo
    con Spread Operator
*/
const nuevoMeses = [...meses, "Junio"];
console.table(nuevoMeses);

// const arreglo = [
//   "hola",
//   10,
//   true,
//   "si",
//   null,
//   { nombre: "javier", trabajo: "programador" },
//   [1, 2, 3],
// ];

// // Acceder a los valores de un arreglo
// console.log(numeros[1]);
// console.log(meses[3]);
// console.log(arreglo[6]);

// // Conocer la extensión de un arreglo
// console.log(meses.length);

// numeros.forEach(function(numero){
//     console.log(numero);
// })
