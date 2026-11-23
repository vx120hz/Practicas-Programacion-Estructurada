import readline from "node:readline";

const rl1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const notas = [8, 7, 9, 6, 10];
const suma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
const promedio = suma / notas.length;

console.log(`Notas: ${notas.join(", ")}`);
console.log(`Promedio: ${promedio.toFixed(2)}`);

rl1.close();