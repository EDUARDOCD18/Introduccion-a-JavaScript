//127 - Arrows Function o Funciones Flechas

// Expresión de la Función
const sumar = function (num1, num2) {
  console.log(num1 + num2);
};

sumar(3, 5);

// Arrow Function
/*  const nombreFuncion = (parametro1, parametro2) => //Código a Ejecutar;
    nombreFuncion(argumento1, argumento2);
*/
const sumar2 = (num3, num4) => console.log(num3 + num4);
sumar2(6, 9);

// Otro ejemplo
const aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`);
// Si la ejecución es de una línea los {} son opcionales
aprendiendo("JavaScript");

// Array Methods
const meses = ["enero", "febrero", "marzo", "abril", "mayo"];

const carrito = [
  { nombre: 'Monitor Gamer de 20"', precio: 450 },
  { nombre: "Teclado Gamer", precio: 150 },
  { nombre: "Silla Gamer", precio: 200 },
  { nombre: "Mouse Gamer", precio: 20 },
  { nombre: "Mouse Pad Gamer", precio: 20 },
  { nombre: "Cascos Gamer", precio: 150 },
  { nombre: "Escritorio Gamer", precio: 300 },
];

// forEach para buscar un elemento dentro de un arreglo
meses.forEach((mes) => {
  if (mes == "marzo") {
    console.log("Existe");
  }
});

resultado = carrito.some((producto) => producto.nombre === "Mouse Gamer");
console.log(resultado);

resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado);

resultado = carrito.filter((producto) => producto.precio > 250);
console.log(resultado);
