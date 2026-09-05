import readline from "node:readline";

const ejer3 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

ejer3.question("Ingrese el monto de compra: ", function (monto) {
    monto = parseFloat(monto);

    let porcentajeDescuento;

    if (monto > 100) {
        porcentajeDescuento = 0.15;
    } else if (monto > 50) {
        porcentajeDescuento = 0.10;
    } else {
        porcentajeDescuento = 0;
    }

    let descuento = monto * porcentajeDescuento;
    let totalAPagar = monto - descuento;

    console.log(`Monto original: $${monto.toFixed(2)}`);
    console.log(`Descuento aplicado: $${descuento.toFixed(2)}`);
    console.log(`Total a pagar: $${totalAPagar.toFixed(2)}`);

    ejer3.close();
});