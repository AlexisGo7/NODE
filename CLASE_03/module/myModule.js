// // operaciones.js
// export const operar = (a, b, op) => {
//   if (op === "suma") return a + b;
//   if (op === "resta") return a - b;
//   if (op === "multiplicacion") return a * b;
//   if (op === "division") return b === 0 ? "Error: división por cero" : a / b;
//   return "Operación no válida";
// };

// console.log("Suma:", operar(10, 11, "suma"));
// console.log("Resta:", operar(10, 8, "resta"));
// console.log("Multiplicación:", operar(10, 5, "multiplicacion"));
// console.log("División:", operar(10, 5, "division"));

const miweb = "https://www.google.com.ar";
const miNumero = 39;
const miArray = ["Alexis", "Castaño", "Montoya"];
const usuario = {
  nombre: "Alexis",
  apellido: "Castaño",
  edad: 39
};
module.exports = { miweb, miNumero, miArray, usuario };
