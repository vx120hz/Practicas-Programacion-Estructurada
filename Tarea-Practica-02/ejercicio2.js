import readline from "node:readline";

const interfazLectura = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

interfazLectura.question("Ingrese el nombre del producto: ", function (producto) {
  interfazLectura.question("Ingrese el precio unitario: ", function (precioIngresado) {
    interfazLectura.question("Ingrese la cantidad: ", function (cant) {
      let precio = parseFloat(precioIngresado);
      let cantidad = parseInt(cant);

      let mayus = producto.toUpperCase();
      let tres = mayus.slice(0, 3);
      let total = (precio * cantidad).toFixed(2);

      console.log("\n--- Resultados ---");
      console.log("Producto en mayúsculas:", mayus);
      console.log("Primeras 3 letras:", tres);
      console.log("Precio total: $" + total);

      interfazLectura.close();
    });
  });
});