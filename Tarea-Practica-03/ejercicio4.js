import readline from "node:readline";

const ejer4 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

ejer4.question("Ingrese su nombre: ", function (nombre) {
    ejer4.question("Ingrese su edad: ", function (edad) {
        ejer4.question("Ingrese sus años de experiencia: ", function (exp) {
            edad = parseInt(edad);
            exp = parseInt(exp);

            if (edad > 18 && exp > 0) {
                console.log("Candidato válido");
            } else {
                console.log("No cumple con los requisitos");
            }

            ejer4.close();
        });
    });
});