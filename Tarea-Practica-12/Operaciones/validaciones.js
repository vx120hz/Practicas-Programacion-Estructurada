export function correoExiste(mascotas, correo, indiceIgnorado = -1) {
  const buscado = correo.trim().toLowerCase();
  return mascotas.some(
    (m, i) => i !== indiceIgnorado && m.correo.trim().toLowerCase() === buscado
  );
}

export function correoValido(correo) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.trim());
}
