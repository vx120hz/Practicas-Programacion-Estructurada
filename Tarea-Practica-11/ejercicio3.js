import readline from "node:readline";

const rl3 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const productos = [
  { nombre: "Laptop", precio: 800 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Monitor", precio: 250 },
  { nombre: "Teclado", precio: 100 },
  { nombre: "Audífonos", precio: 120 },
  { nombre: "Cable USB", precio: 8 },
];

console.log("Todos los productos:");
productos.forEach((producto) => {
  console.log(`- ${producto.nombre}: $${producto.precio}`);
});

const caros = productos.filter((producto) => producto.precio > 100);

console.log("Productos que cuestan más de $100:");
console.log(caros);

rl3.close();