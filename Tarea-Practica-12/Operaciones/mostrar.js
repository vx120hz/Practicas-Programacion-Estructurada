import { leerMascotas } from "../database/almacenamiento.js";

export function mostrar() {
  const mascotas = leerMascotas();

  if (mascotas.length === 0) {
    console.log("No hay mascotas registradas.");
    return;
  }

  console.log("\n--- Mascotas registradas ---");
  mascotas.forEach((m, i) => {
    console.log(`${i + 1}. ${m.nombre} (${m.especie}) | ${m.edad} años | Propietario: ${m.propietario} | ${m.correo}`);
  });
}
