/* 136 - Clases */

class Producto {
  constructor(nombre, precio, cantidad, disponible) {
    (this.nombre = nombre),
      (this.precio = precio),
      (this.cantidad = cantidad),
      (this.disponible = disponible);
  }

  formatearProducto() {
    if (this.disponible === true) {
      return `- ${this.nombre}\n- Precio: ${this.precio} Bs. D\n- Cantidad disponible: ${this.disponible}\n- Producto actualmente disponible`;
    } else {
      return `- ${this.nombre}\n- Precio: ${this.precio} Bs. D\n- Cantidad disponible: 0\n- Producto actualmente NO disponible`;
    }
  }

  retornarPrecio(){
    return `El precio de ${this.nombre} es ${this.precio}`
  }
}

const producto = new Producto("Mouse gamer", 300, 2000, true);
console.log(producto.formatearProducto());
console.log(producto.retornarPrecio());

const producto2 = new Producto("PC", 500, 0, false);
console.log(producto2.formatearProducto());
