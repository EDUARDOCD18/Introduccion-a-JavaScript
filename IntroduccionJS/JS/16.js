// 121 - Funciones en JS
/*  Las funciones son una serie de procedimientos o instrucciones que raalizan una acción. 

    Permiten tener un código más ordenado y fácil de mantener.

    Son reutilizables.
*/

// DECLARACIÓN DE FUNCIÓN

/* Sintaxis: 
        function nombreFuncion(){
            //Código a Ejecutar
        } 
*/

function sumar() {
  console.log(10 + 10);
}

sumar();

// EXPRESIÓN DE LA FUNCIÓN
/* Sintaxis: 
        const nombreFuncion = function(){
            //Código a Ejecutar
        } 
*/



const sumar2 = function () {
  console.log(3 + 3);
};

sumar2();

// IIFE
/* Sintaxis: 
        (function(){
            // Código a Ejecutar
        })(); 
*/

(function () {
  console.log("Esto es una función");
})();
