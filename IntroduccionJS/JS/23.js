//129 - Switch Case
"use stric";

const metodoPago = "tarjeta";

switch (metodoPago) {
  case "tarjeta":
    console.log("pagas con tarjeta");
    break;

  default:
    console.log("No has pagado");
    break;
}
