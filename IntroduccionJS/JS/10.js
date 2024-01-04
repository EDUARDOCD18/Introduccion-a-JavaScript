// Obejtos

// Sintaxis de un Objeto
const producto = {
  nombreProducto: 'Monitor de 20"',
  precio: 300,
  disponible: true,
};

console.log(producto);

// Sintaxis de .
console.log(producto.precio);

// Otra manera de acceder a las propiedades de los objetos
console.log(producto["nombreProducto"]);

// Agregar Nuevas Propiedades
producto.imagen = "Imagen.jpg";
console.log(producto.imagen);

// Eliminar Propieades
delete producto.disponible;
console.log(producto);
