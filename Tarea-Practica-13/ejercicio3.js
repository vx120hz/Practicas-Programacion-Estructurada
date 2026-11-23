import readline from "node:readline";

const rl3 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function pedirNotas(total, notas, indice) {
  if (indice === total) {
    mostrarResultados(notas);
    return;
  }

  rl3.question(`Nota del estudiante ${indice + 1} (0 a 10): `, (respuesta) => {
    const nota = Number(respuesta);

    if (respuesta.trim() === "" || Number.isNaN(nota) || nota < 0 || nota > 10) {
      console.log("La nota debe estar entre 0 y 10.");
      pedirNotas(total, notas, indice);
      return;
    }

    notas.push(nota);
    pedirNotas(total, notas, indice + 1);
  });
}

function mostrarResultados(notas) {
  let aprobados = 0;
  let reprobados = 0;
  let notaMaxima = notas[0];

  notas.forEach((nota) => {
    if (nota >= 6) {
      aprobados++;
    } else {
      reprobados++;
    }
    if (nota > notaMaxima) {
      notaMaxima = nota;
    }
  });

  console.log("\n--- Resultados ---");
  console.log(`Notas: ${notas.join(", ")}`);
  console.log(`Aprobados (nota >= 6): ${aprobados}`);
  console.log(`Reprobados: ${reprobados}`);
  console.log(`Nota más alta: ${notaMaxima}`);
  rl3.close();
}

function preguntarCantidad() {
  rl3.question("¿Cuántos estudiantes va a registrar? ", (respuesta) => {
    const cantidad = Number(respuesta);

    if (respuesta.trim() === "" || !Number.isInteger(cantidad) || cantidad <= 0) {
      console.log("Ingrese un número entero mayor que 0.");
      preguntarCantidad();
      return;
    }

    pedirNotas(cantidad, [], 0);
  });
}

preguntarCantidad();