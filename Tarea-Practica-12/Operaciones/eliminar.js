import { preguntar } from "./preguntar.js";
import { leerMascotas, guardarMascotas } from "../database/almacenamiento.js";

export async function eliminar(rl) {
  const mascotas = leerMascotas();

  if (mascotas.length === 0) {
    console.log("No hay mascotas registradas.");
    return;
  }

  const correoBuscado = (await preguntar(rl, "Correo del propietario de la mascota a eliminar: "))
    .trim()
    .toLowerCase();
  const indice = mascotas.findIndex(
    (m) => m.correo.trim().toLowerCase() === correoBuscado
  );

  if (indice === -1) {
    console.log("No se encontró una mascota con ese correo.");
    return;
  }

  const [eliminada] = mascotas.splice(indice, 1);
  guardarMascotas(mascotas);
  console.log(`Mascota ${eliminada.nombre} eliminada del registro.`);
}
