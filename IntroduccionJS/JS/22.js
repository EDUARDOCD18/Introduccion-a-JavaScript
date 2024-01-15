//128 - Estructuras de Control
"use string";

const puntaje = 1000;

/*
    = es asignación
    == es comparación
    === es comparación estricta, comparar el valor y su tipo (number, String, etc)
*/

// Es igual a
if (puntaje === 1000) {
  console.log("El puntaje es 1000");
} else {
  console.log("El puntaje NO es 1000");
}

// No es igual a
if (puntaje !== 100) {
  console.log("No es igual a 100");
} else {
  console.log("Es igual a 100");
}

const efectivo = 1000,
  carrito = 800;

// Mayor que
if (efectivo > carrito) {
  console.log("Compra realizada");
} else {
  console.log("Saldo insuficiente");
}

// Menor que
if (efectivo < carrito) {
  console.log("Saldo insuficiente");
} else {
  console.log("Compra realizada");
}

const rol = "admin";

// else if
if (rol === "admin") {
  console.log("Full Pass!");
} else if (rol === "edit") {
  console.log("Pass limited!");
} else {
  console.log("No pass!");
}
