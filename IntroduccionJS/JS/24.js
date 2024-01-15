// 130 - For Loops
"use stric";

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} es par.`);
//   } else {
//     console.log(`${i} es impar.`);
//   }
// }

const carrito = [
  { nombre: 'Monitor Gamer de 20"', precio: 450 },
  { nombre: "Teclado Gamer", precio: 150 },
  { nombre: "Silla Gamer", precio: 200 },
  { nombre: "Mouse Gamer", precio: 20 },
  { nombre: "Mouse Pad Gamer", precio: 210 },
  { nombre: "Cascos Gamer", precio: 150 },
  { nombre: "Escritorio Gamer", precio: 300 },
];

for (let i = 0; i < carrito.length; i++) {
  console.log(carrito[i].precio);
}
