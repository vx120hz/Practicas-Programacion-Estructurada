import readline from "node:readline";

const interfazLectura = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

interfazLectura.question("Ingrese su año de nacimiento: ", function (anioNacimiento) {
    
  let anioNac = parseInt(anioNacimiento);
  let anioActual = new Date().getFullYear();
  let edad = anioActual - anioNac;

  console.log("Tu edad aproximada es: " + edad + " años.");

  interfazLectura.close();
});