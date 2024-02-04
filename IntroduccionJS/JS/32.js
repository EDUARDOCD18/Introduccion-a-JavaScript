/* 141 - Async / Await */
"use strict";

/* Es la base de todo desarrollo moderno */

// Función para descargar lista de nuevos clientes
function descargarNuevosClientes() {
    return new Promise(resolve => {
        console.log("Descargando lista de clientes...");
        setTimeout(() => {
            resolve("Lista descargada!")
        }, 5000);
    })
}

// Función para descargar los pedidos 
function descargarUltimosPedidos() {
    return new Promise(resolve => {
        console.log("Descargando lista de pedidos...");
        setTimeout(() => {
            resolve("Pedidos listos!")
        }, 3000);
    })
}

async function app() {
    try {

        // Este código es lento
        /* const clientes = await descargarNuevosClientes()
        const pedidos = await descargarUltimosPedidos()
        console.log(clientes);
        console.log(pedidos); */

        // Reemplazar el código anterior por el siguiente para mejor performance
        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()])
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app()

// console.log("No se bloquea");

/* setTimeout(() => {
    console.log("Set time out...");
}, 5000); */ //Espera el tiempo establecido. 1000 ms = 1s

/* setInterval(()=>{
    console.log("Set interval");
}, 1500) */ //Espera en intervalos de tiempo