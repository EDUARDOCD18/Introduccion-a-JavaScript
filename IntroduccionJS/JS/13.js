// 118 - Unir Dos Objetos con el Spread Operator

"use strict";

// Declaro el Primer Objeto
const producto = {
  nombre: 'Monitor Gamer de 20"',
  precio: 300,
  disponible: true,
};

// Declaro el Segundo Objeto
const medidas = {
  peso: "1 KG",
  medida: "1 M",
};

// Uno ambos ojbejtos con el Spread Operator. 
// Sintanxis: const nuevoObejto = { ...Objeto1, ...Objeto2 };
const nuevoProducto = { ...producto, ...medidas };
console.log(nuevoProducto);

