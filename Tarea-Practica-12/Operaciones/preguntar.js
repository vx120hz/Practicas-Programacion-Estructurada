export function preguntar(rl, texto) {
  return new Promise((resolve) => rl.question(texto, resolve));
}
