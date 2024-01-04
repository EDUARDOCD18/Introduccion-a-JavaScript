// Sintaxis de un Objeto
const producto = {
  nombreProducto: 'Monitor de 20"',
  precio: 300,
  disponible: true,
};

// Forma clásica
// const precioProducto = producto.precio
//   nombreProducto = producto.nombreProducto;

// console.log(precioProducto);
// console.log(nombreProducto);

// Destructuring
const { precio, nombreProducto } = producto;
console.log(precio, nombreProducto);
