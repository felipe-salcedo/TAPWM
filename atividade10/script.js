function verificarTriangulo(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        return "Os valores devem ser maiores que zero.";
    }

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        return "Por favor, insira apenas números válidos.";
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
        return "Esses valores não podem formar um triângulo.";
    }

    if (a === b && b === c) {
        return "Triângulo Equilátero";
    } else if (a === b || a === c || b === c) {
        return "Triângulo Isósceles";
    } else {
        return "Triângulo Escaleno";
    }
}

function main() {
    var a = parseFloat(prompt("Insira o valor de A:"));
    var b = parseFloat(prompt("Insira o valor de B:"));
    var c = parseFloat(prompt("Insira o valor de C:"));

    var resultado = verificarTriangulo(a, b, c);
    alert(resultado);
}

main();
