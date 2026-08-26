import readline from "node:readline";

const nombre = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

nombre.question("Ingrese la cantidad en USD: ", (respuesta) => {
  const usd = parseFloat(respuesta);

  const eur = usd * 0.92;
  const svc = usd * 8.75;
  const gtq = usd * 7.80;

  console.log(usd + " USD = " + eur.toFixed(2) + " EUR");
  console.log(usd + " USD = " + svc.toFixed(2) + " SVC");
  console.log(usd + " USD = " + gtq.toFixed(2) + " GTQ");

  nombre.close();
});