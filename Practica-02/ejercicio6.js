import readline from "node:readline";

const info = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

info.question("Ingrese su nombre: ", (nombre) => {
  info.question("Ingrese su apellido: ", (apellido) => {
    info.question("Ingrese el año de ingreso (ej: 2026): ", (anio) => {
      info.question("Ingrese su promedio: ", (promedio) => {

        let nombreMayus = nombre.toUpperCase();
        let apellidoMayus = apellido.toUpperCase();
        let primeras3Apellido = apellidoMayus.slice(0, 3);
        let ultimos2Anio = anio.slice(-2);
        let promedioDecimales = parseFloat(promedio).toFixed(2);

        console.log("\n--- RESULTADOS ---");
        console.log(`Nombre completo: ${nombreMayus} ${apellidoMayus}`);
        console.log(`Primeras 3 letras del apellido: ${primeras3Apellido}`);
        console.log(`Últimos 2 dígitos del año: ${ultimos2Anio}`);
        console.log(`Promedio: ${promedioDecimales}`);

        info.close();
      });
    });
  });
});