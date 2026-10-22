import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularAreaCirculo(radio) {
    return Math.PI * radio * radio;
}

function calcularPerimetroCirculo(radio) {
    return 2 * Math.PI * radio;
}

function calcularAreaCuadrado(lado) {
    return lado * lado;
}

function calcularPerimetroCuadrado(lado) {
    return 4 * lado;
}

function calcularAreaRectangulo(base, altura) {
    return base * altura;
}

function calcularPerimetroRectangulo(base, altura) {
    return 2 * (base + altura);
}

function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function calcularPerimetroTriangulo(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3;
}

console.log("Figuras geométricas");
console.log("1. Círculo");
console.log("2. Cuadrado");
console.log("3. Rectángulo");
console.log("4. Triángulo");

rl.question("Seleccione una figura (1-4): ", (opcion) => {
    let op = parseInt(opcion);

    switch (op) {
        case 1:
            rl.question("Ingrese el radio: ", (r) => {
                let radio = parseFloat(r);
                console.log("Área: " + calcularAreaCirculo(radio).toFixed(2));
                console.log("Perímetro: " + calcularPerimetroCirculo(radio).toFixed(2));
                rl.close();
            });
            break;

        case 2:
            rl.question("Ingrese el lado: ", (l) => {
                let lado = parseFloat(l);
                console.log("Área: " + calcularAreaCuadrado(lado).toFixed(2));
                console.log("Perímetro: " + calcularPerimetroCuadrado(lado).toFixed(2));
                rl.close();
            });
            break;

        case 3:
            rl.question("Ingrese la base: ", (b) => {
                rl.question("Ingrese la altura: ", (a) => {
                    let base = parseFloat(b);
                    let altura = parseFloat(a);
                    console.log("Área: " + calcularAreaRectangulo(base, altura).toFixed(2));
                    console.log("Perímetro: " + calcularPerimetroRectangulo(base, altura).toFixed(2));
                    rl.close();
                });
            });
            break;

        case 4:
            rl.question("Ingrese la base: ", (b) => {
                rl.question("Ingrese la altura: ", (a) => {
                    rl.question("Ingrese el segundo lado: ", (l2) => {
                        rl.question("Ingrese el tercer lado: ", (l3) => {
                            let base = parseFloat(b);
                            let altura = parseFloat(a);
                            let lado2 = parseFloat(l2);
                            let lado3 = parseFloat(l3);
                            console.log("Área: " + calcularAreaTriangulo(base, altura).toFixed(2));
                            console.log("Perímetro: " + calcularPerimetroTriangulo(base, lado2, lado3).toFixed(2));
                            rl.close();
                        });
                    });
                });
            });
            break;

        default:
            console.log("Opción no válida");
            rl.close();
    }
});