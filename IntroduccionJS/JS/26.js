// 133 - this en JS
console.log("133 - this en JS\n\n".toUpperCase());

/* this. hace referencia al propio objeto */

const reservacion = {
  nombre: "Javier",
  apellido: "Chacon",
  total: 400,
  pagado: false,
  informacion: function () {
    console.log(`${this.nombre} debe ${this.total} $`);
  },
};

/* en este caso se usa function(), () => hará referencia a la ventana global y no al objeto */

const reservacion2 = {
  nombre: "Wilianni",
  apellido: "Vargas",
  total: 4030,
  pagado: false,
  informacion: function () {
    console.log(`${this.nombre} debe ${this.total} $`);
  },
};

reservacion.informacion();
reservacion2.informacion();
