/* 141 - Async / Await */
"use strict";

/* Es la base de todo desarrollo moderno */

function descargarNuevosClientes() {
    return new Promise(resolve => {
        console.log("Descargando lista...");
        setTimeout(() => {
            resolve("Lista descargada")
        }, 5000);
    })
}

async function app() {
    try {
        const resultado = await descargarNuevosClientes()
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

app()

console.log("No se bloquea");

/* setTimeout(() => {
    console.log("Set time out...");
}, 5000); */ //Espera el tiempo establecido. 1000 ms = 1s

/* setInterval(()=>{
    console.log("Set interval");
}, 1500) */ //Espera en intervalos de tiempo