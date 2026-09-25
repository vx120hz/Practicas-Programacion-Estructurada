import readline from "node:readline";

const ejer2 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let cantidad = 0;
let suma = 0;
let calificacionMasAlta = -Infinity;
let calificacionMasBaja = Infinity;
let i = 1;

ejer2.question('¿Cuántas calificaciones desea ingresar? ', (cantidadStr) => {
    cantidad = parseInt(cantidadStr);

    if (isNaN(cantidad) || cantidad <= 0) {
        console.log('Error: Ingrese un número mayor a 0.');
        ejer2.close();
        return;
    }

    pedirCalificacion();
});

function pedirCalificacion() {
    if (i <= cantidad) {
        ejer2.question(`Ingrese la calificación ${i}: `, (notaStr) => {
            let nota = parseFloat(notaStr);

            if (isNaN(nota) || nota < 0 || nota > 100) {
                console.log('Calificación inválida. Ingrese un valor entre 0 y 100.');
                pedirCalificacion();
                return;
            }

            suma += nota;

            if (nota > calificacionMasAlta) {
                calificacionMasAlta = nota;
            }

            if (nota < calificacionMasBaja) {
                calificacionMasBaja = nota;
            }

            i++;
            pedirCalificacion();
        });
    } else {
        let promedio = suma / cantidad;
        let categoria = '';

        switch (true) {
            case (promedio >= 90 && promedio <= 100):
                categoria = 'Sobresaliente (A)';
                break;
            case (promedio >= 80 && promedio < 90):
                categoria = 'Notable (B)';
                break;
            case (promedio >= 70 && promedio < 80):
                categoria = 'Aprobado (C)';
                break;
            case (promedio >= 60 && promedio < 70):
                categoria = 'Suficiente (D)';
                break;
            default:
                categoria = 'Reprobado (F)';
                break;
        }

        console.log('\n--- RESULTADOS ---');
        console.log(`Cantidad: ${cantidad}`);
        console.log(`Suma total: ${suma}`);
        console.log(`Promedio final: ${promedio.toFixed(2)}`);
        console.log(`Calificación más alta: ${calificacionMasAlta}`);
        console.log(`Calificación más baja: ${calificacionMasBaja}`);
        console.log(`Categoría: ${categoria}`);

        ejer2.close();
    }
}