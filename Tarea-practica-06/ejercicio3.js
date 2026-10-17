import readline from "node:readline";

const ejer1 = readline.promises.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const inventario = [];

for (let i = 1; i <= 4; i++) {
    console.log(`Producto ${i}`);
    const nombre = await ejer1.question("Nombre: ");
    const precio = parseFloat(await ejer1.question("Precio: "));
    const cantidad = parseInt(await ejer1.question("Cantidad: "));

    inventario.push({ nombre, precio, cantidad });
}

ejer1.close();

let totalProductos = 0;
let valorInventario = 0;

console.log("--- INVENTARIO ---");

for (const producto of inventario) {
    const valorTotal = producto.precio * producto.cantidad;
    console.log(`${producto.nombre}: $${valorTotal.toFixed(2)}`);

    totalProductos += producto.cantidad;
    valorInventario += valorTotal;
}

const resumen = {
    totalProductos: totalProductos,
    valorInventario: valorInventario.toFixed(2),
};

console.log("--- RESUMEN ---");

for (const propiedad in resumen) {
    console.log(`${propiedad}: ${resumen[propiedad]}`);
}