function ordenarCrescente(val1, val2, val3) {
    let valores = [val1, val2, val3];
    valores.sort((a, b) => a - b);
    return valores;
}

function main() {
    var val1 = parseFloat(prompt("Insira o primeiro valor:"));
    var val2 = parseFloat(prompt("Insira o segundo valor:"));
    var val3 = parseFloat(prompt("Insira o terceiro valor:"));

    if ([val1, val2, val3].some(isNaN)) {
        alert("Por favor, insira apenas números.");
        return;
    }

    var resultado = ordenarCrescente(val1, val2, val3);
    alert("Os valores em ordem crescente são: " + resultado.join(", "));
}

main();