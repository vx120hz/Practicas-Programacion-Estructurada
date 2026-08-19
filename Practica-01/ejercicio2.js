// Ejercicio2: Declare una variable con una temperatura en grados Fahrenheit. Conviértala a grados
// Celsius usando la fórmula correspondiente y muestre el resultado redondeado a dos
// decimales.



let Fahrenheit = 70;
let conversion = (Fahrenheit - 32) * 5 / 9;

console.log(`La temperatura es de: ${conversion.toFixed(2)} C`)
