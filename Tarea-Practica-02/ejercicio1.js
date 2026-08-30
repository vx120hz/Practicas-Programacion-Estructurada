import readline from "node:readline";

const UsuarioNombre = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

UsuarioNombre.question("Ingrese su nombre completo: ", function(nombre){

  let mayus = nombre.toUpperCase();
  let cuatro = mayus.slice(0, 4);
  let minus = cuatro.toLowerCase();

  console.log(`Nombre Completo: ${nombre}`);
  console.log(`Nombre en mayuscula: ${mayus}`);
  console.log(`Primeras cuatro letras: ${cuatro}`);
  console.log(`Primeras cuatro letras en minusculas: ${minus}`);

  UsuarioNombre.close();
});