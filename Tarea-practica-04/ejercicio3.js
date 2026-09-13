import readline from "node:readline";

const ejer3 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

ejer3.question("Seleccione una bebida (1=Agua, 2=Refresco, 3=Jugo, 4=Cafe, 5=Te): ", function (opcion) {
    opcion = parseInt(opcion);

    switch (opcion) {
        case 1:
            console.log("Ha seleccionado: Agua");
            break;

        case 2:
            console.log("Ha seleccionado: Refresco");
            console.log("¿Desea agregar hielo?");
            break;

        case 3:
            console.log("Ha seleccionado: Jugo");
            console.log("¿Desea agregar hielo?");
            break;

        case 4:
            console.log("Ha seleccionado: Cafe");
            break;

        case 5:
            console.log("Ha seleccionado: Te");
            break;

        default:
            console.log("Bebida no disponible");
    }

    ejer3.close();
});