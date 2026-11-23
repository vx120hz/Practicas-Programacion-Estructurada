import { preguntar } from "./preguntar.js";
import { leerMascotas, guardarMascotas } from "../database/almacenamiento.js";
import { correoExiste, correoValido } from "./validaciones.js";

export async function actualizar(rl) {
  const mascotas = leerMascotas();

  if (mascotas.length === 0) {
    console.log("No hay mascotas registradas.");
    return;
  }

  const correoBuscado = (await preguntar(rl, "Correo del propietario de la mascota a actualizar: "))
    .trim()
    .toLowerCase();
  const indice = mascotas.findIndex(
    (m) => m.correo.trim().toLowerCase() === correoBuscado
  );

  if (indice === -1) {
    console.log("No se encontró una mascota con ese correo.");
    return;
  }

  const actual = mascotas[indice];
  console.log("(Presione Enter para mantener el valor actual)");

  const nombre = (await preguntar(rl, `Nombre de la mascota [${actual.nombre}]: `)).trim() || actual.nombre;
  const especie = (await preguntar(rl, `Especie [${actual.especie}]: `)).trim() || actual.especie;
  const textoEdad = (await preguntar(rl, `Edad [${actual.edad}]: `)).trim();
  const propietario = (await preguntar(rl, `Propietario [${actual.propietario}]: `)).trim() || actual.propietario;
  const correo = (await preguntar(rl, `Correo [${actual.correo}]: `)).trim() || actual.correo;

  const edad = textoEdad === "" ? actual.edad : Number(textoEdad);

  if (Number.isNaN(edad) || edad < 0) {
    console.log("La edad debe ser un número mayor o igual a 0. Operación cancelada.");
    return;
  }
  if (!correoValido(correo)) {
    console.log("El correo no tiene un formato válido. Operación cancelada.");
    return;
  }
  if (correoExiste(mascotas, correo, indice)) {
    console.log("Error: ese correo ya está registrado por otro propietario. Operación cancelada.");
    return;
  }

  mascotas[indice] = { nombre, especie, edad, propietario, correo };
  guardarMascotas(mascotas);
  console.log("Mascota actualizada correctamente.");
}
