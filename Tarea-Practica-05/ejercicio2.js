import readline from "node:readline"

const ejer2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

ejer2.question("Ingrese el primer numero (a): ", function (a) {

    ejer2.question("Ingrese el segundo numero (b): ", function (b) {

        ejer2.question("Ingrese el tercer numero (c): ", function (c) {

            a = parseFloat(a);
            b = parseFloat(b);
            c = parseFloat(c);

            if (a === b && b === c) {
                console.log("Los tres numeros son iguales");
            } else {
                if (a !== b && b !== c && a !== c) {
                    console.log("Los tres numeros son diferentes");
                } else {
                    console.log("Hay dos numeros iguales");
                }
            }

            let mayor = a;
            if (b > mayor) mayor = b;
            if (c > mayor) mayor = c;

            let menor = a;
            if (b < menor) menor = b;
            if (c < menor) menor = c;

            console.log("El numero mayor es: " + mayor);
            console.log("El numero menor es: " + menor);

            if (a < 0 || b < 0 || c < 0) {
                console.log("Hay numeros negativos");
            }

            ejer2.close();
        });
    });
});