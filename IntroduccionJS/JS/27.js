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

const producto2 = new Producto("Monitor 49 pulgadas", 5000);
const producto3 = new Producto("Lenovo", 600)
console.log(producto2);
console.log(producto3);
