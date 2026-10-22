import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function obtenerLetra(calificacion) {
    if (calificacion >= 90) {
        return "A";
    } else if (calificacion >= 80) {
        return "B";
    } else if (calificacion >= 70) {
        return "C";
    } else if (calificacion >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function calcularPromedio(calificaciones) {
    let suma = 0;
    for (let i = 0; i < calificaciones.length; i++) {
        suma = suma + calificaciones[i];
    }
    return suma / calificaciones.length;
}

function mostrarResultados(calificaciones) {
    for (let i = 0; i < calificaciones.length; i++) {
        console.log("Calificación " + (i + 1) + ": " + calificaciones[i] + " -> " + obtenerLetra(calificaciones[i]));
    }
    let promedio = calcularPromedio(calificaciones);
    console.log("Promedio: " + promedio.toFixed(2));
    console.log("Letra del promedio: " + obtenerLetra(promedio));
}

rl.question("¿Cuántas calificaciones desea ingresar? ", (cantidadTexto) => {
    let cantidad = parseInt(cantidadTexto);
    let calificaciones = [];

    function pedirCalificacion(numero) {
        if (numero > cantidad) {
            mostrarResultados(calificaciones);
            rl.close();
            return;
        }
        rl.question("Ingrese la calificación " + numero + ": ", (nota) => {
            calificaciones.push(parseFloat(nota));
            pedirCalificacion(numero + 1);
        });
    }

    pedirCalificacion(1);
});