// 134 - POO | Object Constructor y Object Literal

/* Object Literal */
const producto = {
  nombre: "tablet",
  precio: 500,
}; // Poco dinámico, más estático.

/* Object Constructor */
function Producto(nombre, precio) {
  // el nombre de la clase empieza en mayúculas
  (this.nombre = nombre), (this.precio = precio);
  // el .this hace referencia al atributo
}

// Crear funciones para usar en un objeto en específico
Producto.prototype.formatearProducto = function () {
  return `${this.nombre} posee un valor de $${this.precio}`;
};

function Cliente(nombre, apellido) {
  (this.nombre = nombre), (this.apellido = apellido);
}

Cliente.prototype.formatearCliente = function () {
  return `Bella mi novia ${this.nombre} ${this.apellido} :3`;
};

const producto2 = new Producto("Monitor 49 pulgadas", 5000);
const producto3 = new Producto("Lenovo", 600);
const nuevoCliente = new Cliente("Wilianni", "Vargas");

console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
console.log(nuevoCliente.formatearCliente());
