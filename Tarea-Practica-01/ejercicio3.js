import readline from "node:readline";

const nombre = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const precioKw = 0.15;

nombre.question("Ingrese los kWh consumidos: ", (respuesta) => {
  const kwh = parseFloat(respuesta);

  const costoBase = kwh * precioKw;
  const impuesto = costoBase * 0.10;
  const costoTotal = costoBase + impuesto;

  console.log("Kilowatts consumidos: " + kwh + " kWh");
  console.log("Costo base: $" + costoBase.toFixed(2));
  console.log("Impuesto (10%): $" + impuesto.toFixed(2));
  console.log("Costo total: $" + costoTotal.toFixed(2));

  nombre.close();
});