import readline from "node:readline";

const ejer1 = readline.promises.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let saldo = 1000;
let opcion;

do {
    console.log("\n--- CAJERO AUTOMATICO ---");
    console.log("1) Consultar saldo");
    console.log("2) Retirar");
    console.log("3) Depositar");
    console.log("4) Salir");

    opcion = parseInt(await ejer1.question("Seleccione una opcion: "));

    switch (opcion) {
        case 1:
            console.log(`Su saldo actual es: $${saldo.toFixed(2)}`);
            break;
        case 2: {
            let retiro = parseFloat(await ejer1.question("Ingrese el monto a retirar: "));
            if (retiro > 0 && retiro <= saldo) {
                saldo -= retiro;
                console.log(`Retiro exitoso. Nuevo saldo: $${saldo.toFixed(2)}`);
            } else if (retiro > saldo) {
                console.log("Fondos insuficientes");
            } else {
                console.log("Monto no valido");
            }
            break;
        }
        case 3: {
            let deposito = parseFloat(await ejer1.question("Ingrese el monto a depositar: "));
            if (deposito > 0) {
                saldo += deposito;
                console.log(`Deposito exitoso. Nuevo saldo: $${saldo.toFixed(2)}`);
            } else {
                console.log("El deposito debe ser mayor a 0");
            }
            break;
        }
        case 4:
            console.log("Gracias por usar el cajero. Hasta pronto");
            break;
        default:
            console.log("Opcion no valida");
            break;
    }
} while (opcion !== 4);

ejer1.close();