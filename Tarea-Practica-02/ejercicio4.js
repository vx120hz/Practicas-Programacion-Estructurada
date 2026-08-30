import readline from "node:readline";

const interfazLectura = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

interfazLectura.question("Presione Enter para ver la fecha y hora actual: ", function (entrada) {
  let fechaActual = new Date();

  let dia = fechaActual.getDate();
  let mes = fechaActual.getMonth() + 1;
  let anio = fechaActual.getFullYear();

  let horas = fechaActual.getHours();
  let minutos = fechaActual.getMinutes();
  let segundos = fechaActual.getSeconds();

  console.log("Hoy es " + dia + "/" + mes + "/" + anio + " y son las " + horas + ":" + minutos + ":" + segundos);

  interfazLectura.close();
});