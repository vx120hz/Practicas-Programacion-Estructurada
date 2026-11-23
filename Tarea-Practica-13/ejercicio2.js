import readline from "node:readline";

const rl2 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function pedirPrecios(total, precios, indice) {
  if (indice === total) {
    mostrarResultados(precios);
    return;
  }

  rl2.question(`Precio del producto ${indice + 1}: $`, (respuesta) => {
    const precio = Number(respuesta);

    if (respuesta.trim() === "" || Number.isNaN(precio) || precio < 0) {
      console.log("Ingrese un precio válido (número mayor o igual a 0).");
      pedirPrecios(total, precios, indice);
      return;
    }

    precios.push(precio);
    pedirPrecios(total, precios, indice + 1);
  });
}

function mostrarResultados(precios) {
  console.log("\n--- Precios mayores a $15.00 ---");
  let hayMayores = false;

  precios.forEach((precio, i) => {
    if (precio > 15) {
      console.log(`Producto ${i + 1}: $${precio.toFixed(2)}`);
      hayMayores = true;
    }
  });

  if (!hayMayores) {
    console.log("Ningún producto supera los $15.00.");
  }

  const total = precios.reduce((acumulador, precio) => acumulador + precio, 0);
  console.log(`\nTotal de la compra: $${total.toFixed(2)}`);
  rl2.close();
}

function preguntarCantidad() {
  rl2.question("¿Cuántos productos va a registrar? ", (respuesta) => {
    const cantidad = Number(respuesta);

    if (respuesta.trim() === "" || !Number.isInteger(cantidad) || cantidad <= 0) {
      console.log("Ingrese un número entero mayor que 0.");
      preguntarCantidad();
      return;
    }

    pedirPrecios(cantidad, [], 0);
  });
}

preguntarCantidad();