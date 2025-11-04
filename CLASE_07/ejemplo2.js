const fs = require("fs");
const getText = (pathFile) => {
  return (promesa = new Promise((resolve, reject) => {
    fs.readFile(pathFile, "utf-8", (err, data) => {
      if (err) {
        reject("Error al leer el archivo: " + err.message);
        return;
      } else {
        resolve(data);
      }
    });
  }));
};


// getText("./data/archivo.txt")
//   .then((result) => console.log("Contenido del archivo:\n", result))
//   .catch((err) => console.error("Ocurrió un error:", err));
// getText("./data/archivo2.txt")
//   .then((result) => console.log("Contenido del archivo:\n", result))
//   .catch((err) => console.error("Ocurrió un error:", err));

async function read(){
const resultado1 = await getText("./data/archivo.txt");
const resultado2 = await getText("./data/archivo2.txt");
console.log(resultado1);
console.log(resultado2);
}

read();