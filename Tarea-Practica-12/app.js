import readline from "node:readline";
import { preguntar } from "./operaciones/preguntar.js";
import { insertar } from "./operaciones/insertar.js";
import { mostrar } from "./operaciones/mostrar.js";
import { actualizar } from "./operaciones/actualizar.js";
import { eliminar } from "./operaciones/eliminar.js";
import { leerMascotas } from "./database/almacenamiento.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function mostrarMenu() {
  console.log("\n===== VETERINARIA - REGISTRO DE MASCOTAS =====");
  console.log("1. Insertar");
  console.log("2. Mostrar");
  console.log("3. Actualizar");
  console.log("4. Eliminar");
  console.log("5. Salir");
}

async function main() {
  leerMascotas();
  let salir = false;

  while (!salir) {
    mostrarMenu();
    const opcion = (await preguntar(rl, "Elija una opción: ")).trim();

    switch (opcion) {
      case "1":
        await insertar(rl);
        break;
      case "2":
        mostrar();
        break;
      case "3":
        await actualizar(rl);
        break;
      case "4":
        await eliminar(rl);
        break;
      case "5":
        console.log("Hasta pronto.");
        salir = true;
        break;
      default:
        console.log("Opción no válida. Elija del 1 al 5.");
    }
  }

  rl.close();
}

main();
