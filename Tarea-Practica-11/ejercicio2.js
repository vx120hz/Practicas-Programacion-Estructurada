import readline from "node:readline";

const rl2 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function crearMultiplicador(factor) {
  return (numero) => numero * factor;
}

const duplicador = crearMultiplicador(2);
const triplicador = crearMultiplicador(3);
const numero = 5;

console.log(`Duplicador: ${numero} x 2 = ${duplicador(numero)}`);
console.log(`Triplicador: ${numero} x 3 = ${triplicador(numero)}`);

rl2.close();