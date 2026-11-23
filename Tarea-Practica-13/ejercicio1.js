import readline from "node:readline";

const rl1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function pedirEdades(total, edades, indice) {
  if (indice === total) {
    mostrarResultados(edades);
    return;
  }

  rl1.question(`Edad de la persona ${indice + 1}: `, (respuesta) => {
    const edad = Number(respuesta);

    if (respuesta.trim() === "" || !Number.isInteger(edad) || edad < 0) {
      console.log("Ingrese una edad válida (entero mayor o igual a 0).");
      pedirEdades(total, edades, indice);
      return;
    }

    edades.push(edad);
    pedirEdades(total, edades, indice + 1);
  });
}

function mostrarResultados(edades) {
  console.log("\n--- Edades registradas ---");
  edades.forEach((edad, i) => {
    console.log(`Persona ${i + 1}: ${edad} años`);
  });

  const suma = edades.reduce((acumulador, edad) => acumulador + edad, 0);
  const promedio = suma / edades.length;
  console.log(`\nPromedio de edad: ${promedio.toFixed(2)} años`);
  rl1.close();
}

function preguntarCantidad() {
  rl1.question("¿Cuántas personas va a registrar? ", (respuesta) => {
    const cantidad = Number(respuesta);

    if (respuesta.trim() === "" || !Number.isInteger(cantidad) || cantidad <= 0) {
      console.log("Ingrese un número entero mayor que 0.");
      preguntarCantidad();
      return;
    }

    pedirEdades(cantidad, [], 0);
  });
}

preguntarCantidad();