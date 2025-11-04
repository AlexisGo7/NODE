// Importamos el módulo 'fs' (File System) para leer y escribir archivos
const fs = require("fs");

// Importamos 'prompt-sync' para poder leer datos del usuario desde la consola
const prompt = require("prompt-sync")({ sigint: true });

// Nombre del archivo donde se guardarán las notas
const archivo = "nota.txt";

/* 
📖 Función: leerNotas()
Lee el archivo 'notas.txt' y devuelve un arreglo con las notas.
- Si el archivo existe, lo lee, separa las líneas y elimina las vacías.
- Si no existe, devuelve un arreglo vacío [].
*/
function leerNotas() {
  return fs.existsSync(archivo)
    ? fs.readFileSync(archivo, "utf8").split("\n").filter(Boolean)
    : [];
}

/* 
💾 Función: guardarNotas(notas)
Recibe un arreglo con las notas y las guarda en el archivo 'notas.txt',
uniéndolas con saltos de línea (\n).
*/
function guardarNotas(notas) {
  fs.writeFileSync(archivo, notas.join("\n"));
}

/* 
🟩 Función: agregarNota()
- Pide al usuario una nueva nota.
- La agrega al archivo junto con las anteriores.
*/
function agregarNota() {
  const notas = leerNotas(); // Cargamos las notas existentes
  const nueva = prompt("📝 Nueva nota: "); // Pedimos la nueva nota
  notas.push(nueva); // La agregamos al arreglo
  guardarNotas(notas); // Guardamos todas las notas
  console.log("✅ Nota agregada.");
}

/* 
🟨 Función: actualizarNota()
- Muestra todas las notas numeradas.
- Pide al usuario cuál quiere modificar.
- Reemplaza esa nota con el nuevo contenido.
*/
function actualizarNota() {
  const notas = leerNotas();
  if (notas.length === 0) return console.log("📭 No hay notas."); // Si no hay, se sale

  // Mostrar las notas con su número
  notas.forEach((n, i) => console.log(`${i + 1}. ${n}`));

  // Pedir el número de nota a actualizar
  const i = prompt("Número de nota a actualizar: ") - 1;

  // Validar número
  if (!notas[i]) return console.log("❌ Número inválido.");

  // Pedir el nuevo contenido y reemplazar
  notas[i] = prompt("Nuevo contenido: ");
  guardarNotas(notas); // Guardar cambios
  console.log("✏️ Nota actualizada.");
}

/* 
🟥 Función: eliminarNota()
- Muestra todas las notas.
- Pide el número de la nota que se desea eliminar.
- La quita del arreglo y guarda el nuevo listado.
*/
function eliminarNota() {
  const notas = leerNotas();
  if (notas.length === 0) return console.log("📭 No hay notas.");

  // Mostrar las notas numeradas
  notas.forEach((n, i) => console.log(`${i + 1}. ${n}`));

  // Pedir número a eliminar
  const i = prompt("Número de nota a eliminar: ") - 1;

  // Validar número
  if (!notas[i]) return console.log("❌ Número inválido.");

  // Eliminar nota con splice()
  notas.splice(i, 1);
  guardarNotas(notas); // Guardar los cambios
  console.log("🗑️ Nota eliminada.");
}

/* 
📋 Función: verNotas()
Muestra todas las notas guardadas. Si no hay, muestra un mensaje.
*/
function verNotas() {
  const notas = leerNotas();
  if (notas.length === 0) console.log("📭 No hay notas.");
  else notas.forEach((n, i) => console.log(`${i + 1}. ${n}`));
}

/* 
🧭 Función: menu()
Ciclo que muestra el menú principal y ejecuta las opciones.
El programa se repite hasta que el usuario elige “Salir”.
*/
function menu() {
  while (true) {
    console.log(`
==== MENÚ ====
1. Agregar nota
2. Ver notas
3. Actualizar nota
4. Eliminar nota
5. Salir
==============`);

    const op = prompt("Opción: "); // Leer opción del usuario

    // Dependiendo de la opción, llamamos la función correspondiente
    if (op === "1") agregarNota();
    else if (op === "2") verNotas();
    else if (op === "3") actualizarNota();
    else if (op === "4") eliminarNota();
    else if (op === "5") return console.log("👋 Programa finalizado."); // Salir
    else console.log("❌ Opción no válida.");
  }
}

// Llamamos la función principal del programa
menu();
