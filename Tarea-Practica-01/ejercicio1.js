import readline from "node:readline";

const nombre = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const PI = 3.14159;

nombre.question("Ingrese el radio del círculo: ", (respuesta) => {
  const radio = parseFloat(respuesta);

  const perimetro = 2 * PI * radio;
  const area = PI * radio * radio;

  console.log("Radio: " + radio);
  console.log("Perímetro: " + perimetro.toFixed(2));
  console.log("Área: " + area.toFixed(2));

  nombre.close();
});