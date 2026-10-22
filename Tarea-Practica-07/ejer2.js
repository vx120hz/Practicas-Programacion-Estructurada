import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function main() {
    let saldo = 1000;
    let opcion;

    do {
        console.log("");
        console.log("Cajero automático");
        console.log("1. Consultar saldo");
        console.log("2. Retirar");
        console.log("3. Depositar");
        console.log("4. Salir");

        let respuesta = await rl.question("Seleccione una opción (1-4): ");
        opcion = parseInt(respuesta);

        switch (opcion) {
            case 1:
                console.log("Su saldo es: $" + saldo);
                break;
            case 2:
                let retiro = parseFloat(await rl.question("Monto a retirar: "));
                if (retiro > 0 && retiro <= saldo) {
                    saldo = saldo - retiro;
                    console.log("Retiro exitoso. Nuevo saldo: $" + saldo);
                } else {
                    console.log("Monto inválido o mayor al saldo disponible");
                }
                break;
            case 3:
                let deposito = parseFloat(await rl.question("Monto a depositar: "));
                if (deposito > 0) {
                    saldo = saldo + deposito;
                    console.log("Depósito exitoso. Nuevo saldo: $" + saldo);
                } else {
                    console.log("El depósito debe ser mayor a 0");
                }
                break;
            case 4:
                console.log("Gracias por usar el cajero");
                break;
            default:
                console.log("Opción no válida");
        }
    } while (opcion != 4);

    rl.close();
}

main();