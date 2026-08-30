import readline from "node:readline";

const fecha = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let hoy = new Date();

let dia = hoy.getDate();

let mes = hoy.getMonth() + 1;

let anio = hoy.getFullYear();

let fechaFormateada = `${dia}/${mes}/${anio}`;

console.log(`Fecha actual es: ${fechaFormateada}`);

fecha.close();