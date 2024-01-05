// Usar el modo estricto para las buenas prácticas
"use strict";

// Objeto
const producto = {
  nombreProducto: 'Monitor de 20"',
  precio: 300,
  disponible: true,
};

// Evitar que el objeto sea modificado, solo serán modificadas las propiedades existentes
Object.seal(producto)
producto.precio = 400
console.log(producto.precio);

// Congelar un objeto y evitar su modificación
Object.freeze(producto);


// Determinar si un objeto está congelado
console.log(Object.isFrozen(producto));

producto.img = "imagen.jpg";
console.log(producto.img);
