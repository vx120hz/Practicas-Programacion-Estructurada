import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function main() {
    let inventario = [];

    console.log("Ingrese los datos de 4 productos");
    for (let i = 1; i <= 4; i++) {
        console.log("");
        console.log("Producto " + i);
        let nombre = await rl.question("Nombre: ");
        let precio = parseFloat(await rl.question("Precio: "));
        let cantidad = parseInt(await rl.question("Cantidad: "));

        inventario.push({ nombre: nombre, precio: precio, cantidad: cantidad });
    }

    let totalProductos = 0;
    let valorTotal = 0;

    console.log("");
    console.log("Inventario de productos");
    for (let producto of inventario) {
        let valorProducto = producto.precio * producto.cantidad;
        console.log(producto.nombre + " - Precio: $" + producto.precio + " - Cantidad: " + producto.cantidad + " - Valor total: $" + valorProducto);
        totalProductos = totalProductos + producto.cantidad;
        valorTotal = valorTotal + valorProducto;
    }

    let resumen = {
        totalProductos: totalProductos,
        valorTotalInventario: valorTotal
    };

    console.log("");
    console.log("Resumen del inventario");
    for (let propiedad in resumen) {
        console.log(propiedad + ": " + resumen[propiedad]);
    }

    rl.close();
}

main();