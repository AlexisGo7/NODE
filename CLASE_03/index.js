// // import express from "express";
// const persona = [];

// function agregarPersona(nombre, edad) {
//   const id = persona.length + 1;
//   persona.push({ id, nombre, edad });
// }

// agregarPersona("Juan", 25);
// agregarPersona("Ana", 30);
// agregarPersona("Luis", 35);

// persona[0].nombre = "Alexis";
// console.table(persona);

// const mostrarinformacion = (usuario, edad) =>
//   `Hola${usuario} tu edad es ${edad}`;
// console.log(mostrarinformacion("Juan", 25));

// // intervalos

// let contador = 0;
// const intervalo = setInterval(() => {
//   console.log(contador);
//   contador++;
//   if (contador === 10) {
//     clearInterval(intervalo);
//   }
// }, 1000);

// // setInmediate
// setImmediate(() => {
//   console.log("Hola mundo");
// });

// console.log("este mensaje se compila antes que el anterior");

// const {miweb} = require("./module/myModule.js");
// console.log(miweb);

// const {suma} = require("./module/operaciones.js");
// console.log(suma);
const os = require("os");
console.log("sistema operativo:", os.type());
console.log("memoria libre:", os.freemem());

