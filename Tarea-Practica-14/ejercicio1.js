const carrito = [
  { nombre: "Laptop", precio: 800, cantidad: 1 },
  { nombre: "Mouse", precio: 25.5, cantidad: 2 },
  { nombre: "Teclado", precio: 45, cantidad: 3 },
];

function calcularTotal(carrito) {
  let total = 0;
  for (const producto of carrito) {
    total += producto.precio * producto.cantidad;
  }
  return total;
}

function buscarProducto(carrito, nombreProducto) {
  for (const producto of carrito) {
    if (producto.nombre.toLowerCase() === nombreProducto.toLowerCase()) {
      return `${producto.nombre} cuesta $${producto.precio.toFixed(2)}`;
    }
  }
  return "Producto no encontrado";
}

console.log(`Total a pagar: $${calcularTotal(carrito).toFixed(2)}`);
console.log(buscarProducto(carrito, "Mouse"));
console.log(buscarProducto(carrito, "Monitor"));
