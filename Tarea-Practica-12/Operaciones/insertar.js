import { preguntar } from "./preguntar.js";
import { leerMascotas, guardarMascotas } from "../database/almacenamiento.js";
import { correoExiste, correoValido } from "./validaciones.js";

export async function insertar(rl) {
  const mascotas = leerMascotas();

  const nombre = (await preguntar(rl, "Nombre de la mascota: ")).trim();
  const especie = (await preguntar(rl, "Especie (perro, gato, etc.): ")).trim();
  const textoEdad = (await preguntar(rl, "Edad de la mascota (años): ")).trim();
  const propietario = (await preguntar(rl, "Nombre del propietario: ")).trim();
  const correo = (await preguntar(rl, "Correo del propietario: ")).trim();

  const edad = Number(textoEdad);

  if (!nombre || !especie || !propietario) {
    console.log("Nombre, especie y propietario son obligatorios. Operación cancelada.");
    return;
  }
  if (textoEdad === "" || Number.isNaN(edad) || edad < 0) {
    console.log("La edad debe ser un número mayor o igual a 0. Operación cancelada.");
    return;
  }
  if (!correoValido(correo)) {
    console.log("El correo no tiene un formato válido. Operación cancelada.");
    return;
  }
  if (correoExiste(mascotas, correo)) {
    console.log("Error: ese correo ya está registrado. Operación cancelada.");
    return;
  }

  mascotas.push({ nombre, especie, edad, propietario, correo });
  guardarMascotas(mascotas);
  console.log("Mascota registrada correctamente.");
}
