//Ejercicio6: Declare variables para el peso en kilogramos y la altura en metros. Calcule el IMC usando
//la fórmula apropiada y muestre el resultado redondeado a dos decimales.

let altura = 1.73;
let peso = 70;

let IMC = peso/(altura*altura);

console.log(`Peso ${peso} Kg`)
console.log(`Altura ${altura}Metros`)
console.log(`IMC: ${IMC.toFixed(2)}`)