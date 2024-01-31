/* 139 - Promises o Promesas en JS */
"use strict";

/* Refleja un valor que podrá estar disponible ahora, en un futuro o nunca */

const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = true
    if (auth) {
        resolve("Usuario autenticado"); //Promesa cumplida
    } else {
        reject("No se puedo autenticar al usuario"); //Promesa no cumplida
    }
})

usuarioAutenticado
    .then((resltado) => {
        console.log(resltado);
    })
    .catch((error) => {
        console.log(error);
    })
// console.log(usuarioAutenticado);

/* Existen tres valores posibles en los promises 
    - pending: no se ha cumplido, pero tampoco rechazado
    - fulfield: cumplido
    -reject: rechazado o no cumplido
*/