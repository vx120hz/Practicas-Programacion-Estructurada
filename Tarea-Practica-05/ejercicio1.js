import readline from "node:readline"

const ejer1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("1 = Tarjeta de Debito");
console.log("2 = Tarjeta de Credito");
console.log("3 = Tarjeta de Premium");

ejer1.question("Ingrese el tipo de tarjeta: ", function (tipo) {
    tipo = parseInt(tipo);

    let limite;

    switch (tipo) {
        case 1:
            limite = 500;
            break;
        case 2:
            limite = 1000;
            break;
        case 3:
            limite = 2000;
            break;
        default:
            limite = -1;
            break;
    }

    if (limite === -1) {
        console.log("Tarjeta no valida");
        ejer1.close();
        return;
    }

    ejer1.question("Ingrese el monto a retirar: ", function (monto) {
        monto = parseFloat(monto);

        if (monto <= limite && monto % 10 === 0) {
            console.log("Retiro exitoso");
        } else if (monto > limite) {
            console.log("Limite excedido");
        } else if (monto % 10 !== 0) {
            console.log("El monto debe ser multiplo de $10");
        }

        ejer1.close();
    });

});