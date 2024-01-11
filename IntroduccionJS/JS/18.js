// 124 - Funciones con parámetros y argumentos
"use stric";

function sumar(num1 = 0, num2 = 0) {
  // dentro del () de la función al ser declarada van los parámetros
  console.log(
    `El resultado de la suma entre ${num1} y ${num2} es ${num1 + num2}`
  );
}

sumar(6, 30); // dentro del () de la función a ser llamda van los argumentos o valores reales
sumar(2, 2);
sumar(10, 30);
sumar(100, 0);

/* El código de las funciones es REUTILIZABLE */

const sumar2 = function (num3 = 0, num4 = 0) {
  console.log(
    `El resultado de la suma DOS entre ${num3} y ${num4} es ${num3 + num4}`
  );
};

sumar2(3, 5);
sumar2(20, 10);
sumar2(45, 45);
