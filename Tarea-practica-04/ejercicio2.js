import readline from "node:readline"

const ejer2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

ejer2.question("Ingrese su nivel de estudio Ej(1-5): ", function (nivel) {

    nivel = parseInt(nivel);

    switch (nivel) {
        case 1:
            console.log("Tu nivel de estudio es de Primaria");
            break;
        case 2:
            console.log("Tu nivel de estudio es de Secundaria");
            break;
        case 3:
            console.log("Tu nivel de estudio es de Bachillierato");
            break;
        case 4:
            console.log("Tu nivel de estudio es de Universidad");
            break;
        case 5:
            console.log("Tu nivel de estudio es Post Grado");
            break;

        default:
            console.log("Para saber su nivel de estudio ingrese un numero valido que este entre el rango (1-5) ");
    }

    ejer2.close();
});