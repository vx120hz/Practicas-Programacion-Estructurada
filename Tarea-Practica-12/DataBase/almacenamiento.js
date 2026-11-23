import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const carpeta = path.dirname(fileURLToPath(import.meta.url));
const ARCHIVO = path.join(carpeta, "mascotas.json");

export function leerMascotas() {
  if (!fs.existsSync(ARCHIVO)) {
    fs.writeFileSync(ARCHIVO, "[]", "utf-8");
    return [];
  }
  try {
    const contenido = fs.readFileSync(ARCHIVO, "utf-8");
    return contenido.trim() === "" ? [] : JSON.parse(contenido);
  } catch {
    console.log("El archivo mascotas.json está dañado. Se iniciará vacío.");
    return [];
  }
}

export function guardarMascotas(mascotas) {
  fs.writeFileSync(ARCHIVO, JSON.stringify(mascotas, null, 2), "utf-8");
}
