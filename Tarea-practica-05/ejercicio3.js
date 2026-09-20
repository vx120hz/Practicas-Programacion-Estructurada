import readline from "node:readline"

const ejer3 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let saldo = 1000;

console.log("1. Consultar saldo");
console.log("2. Retirar dinero");
console.log("3. Depositar dinero");
console.log("4. Salir");

ejer3.question("Ingrese una opcion: ", function (opcion) {
    opcion = parseInt(opcion);

    switch (opcion) {
        case 1:
            console.log(`Su saldo actual es de $${saldo}`)
            break;

        case 2:
            ejer3.question("Ingrese el monto a retirar: ", function (monto) {
                monto = parseFloat(monto);

                if (monto <= 0) {
                    console.log("Error: el monto debe ser mayor a 0");
                } else if (monto % 5 !== 0) {
                    console.log("Error: el monto debe ser multiplo de $5");
                } else if (monto > saldo) {
                    console.log("Error: el monto excede el saldo disponible");
                } else {
                    saldo = saldo - monto;
                    console.log(`Retiro exitoso. Su nuevo saldo es: $${saldo}`);
                }
            });
            break;

        case 3:
            ejer3.question("Ingrese el monto a depositar: ", function (monto) {
                monto = parseFloat(monto);

                if (monto <= 0) {
                    console.log("Error: el monto debe ser mayor a 0");
                } else if (monto > 5000) {
                    console.log("Error: no se puede depositar mas de $5000");
                } else {
                    saldo = saldo + monto;
                    console.log(`Deposito exitoso. Su nuevo saldo es: $${saldo}`);
                }
            });
            break;

        case 4:
            console.log("Gracias por usar el cajero");
            ejer3.close();
            break;

        default:
            console.log("Opcion no valida");
            break;
    }

});