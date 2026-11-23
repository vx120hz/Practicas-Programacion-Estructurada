import readline from "node:readline";

const ejer2 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function esPrimo(numero) {
  if (numero < 2) return false;

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

ejer2.question("Ingrese un numero N: ", function (entrada) {
  const N = parseInt(entrada);

  if (esPrimo(N)) {
    console.log(`${N} es un numero primo.`);
  } else {
    console.log(`${N} no es un numero primo.`);
  }

  console.log(`Numeros primos desde 1 hasta ${N}:`);
  for (let i = 1; i <= N; i++) {
    if (esPrimo(i)) {
      console.log(i);
    }
  }

  ejer2.close();
});