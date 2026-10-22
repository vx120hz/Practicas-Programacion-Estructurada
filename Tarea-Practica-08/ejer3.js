import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function contarVocales(cadena) {
    let vocales = "aeiouáéíóú";
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (vocales.includes(cadena[i].toLowerCase())) {
            contador++;
        }
    }
    return contador;
}

function invertirCadena(cadena) {
    let invertida = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
        invertida = invertida + cadena[i];
    }
    return invertida;
}

function esPalindromo(cadena) {
    let limpia = cadena.toLowerCase().split(" ").join("");
    return limpia === invertirCadena(limpia);
}

rl.question("Ingrese una palabra o frase: ", (texto) => {
    console.log("Cantidad de vocales: " + contarVocales(texto));
    console.log("Cadena invertida: " + invertirCadena(texto));

    if (esPalindromo(texto)) {
        console.log("Es palíndromo");
    } else {
        console.log("No es palíndromo");
    }

    rl.close();
});