/* 137 - Herencia POO */
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
}

class Libro extends Producto {
  constructor(nombre, precio, isbm) {
    super(nombre, precio);
    this.isbm = isbm;
  }

  formatearProducto() {
    return `- ${this.nombre}\n- Precio: ${this.precio}\n- isbm: ${this.isbm}`;
  }
}

const libro = new Libro("Caballero", 20, "78758979987");
console.log(libro.formatearProducto());
