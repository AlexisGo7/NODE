const fs = require("fs");
try {
    const datos = fs.readFileSync("./data/archivo.txt", "utf-8");
    console.log(datos);
} catch (error) {
    console.error("Error al leer el archivo", error);
}