// 132 - forEach y map
console.log("132 - forEach y map\n\n".toUpperCase());

const carrito = [
  { nombre: 'Monitor Gamer de 20"', precio: 450 },
  { nombre: "Teclado Gamer", precio: 150 },
  { nombre: "Silla Gamer", precio: 200 },
  { nombre: "Mouse Gamer", precio: 20 },
  { nombre: "Mouse Pad Gamer", precio: 210 },
  { nombre: "Cascos Gamer", precio: 150 },
  { nombre: "Escritorio Gamer", precio: 300 },
];

/* forEach solo se pueden ejecutar en arreglos */

// forEach
carrito.forEach((producto) =>
  console.log(producto.nombre)
); /* Para iterar cada elemento y mostrar en pantalla, o mostrar en el HTML */

// map
const arreglo = carrito.map(
  (producto) => `${producto.nombre} - ${producto.precio} Bs. D`
); /* Crear un nuevo arreglo */
console.table(arreglo);
