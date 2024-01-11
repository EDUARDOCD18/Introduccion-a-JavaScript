// 125 - Funciones que retornan valores

function sumar(num1, num2) {
  return `El resultado de la suma entre ${num1} y ${num2} es ${num1 + num2}`;
}

/* El retorno se debe asignar a una variable */
resultado = sumar(4, 6);
console.log(resultado);

/* EJEMPLO MÁS AVANZADO */
let total = 0;

function agregarCarrito(precio) {
  return (total += precio);
}

function calcularImpuesto(total) {
  return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);

console.log(`Base Imponible ${total} BS`);

const totalAPagar = calcularImpuesto(total);

console.log(`Impuesto ${totalAPagar - total} BS`);
console.log(`Total a pagar ${totalAPagar} BS`);