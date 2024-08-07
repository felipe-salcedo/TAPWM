function valoresMath(val1, val2, val3, val4) {
    return Math.max(val1, val2, val3, val4);
}

function main() {
    var val1 = parseFloat(prompt("Insira o primeiro valor:"));
    var val2 = parseFloat(prompt("Insira o segundo valor:"));
    var val3 = parseFloat(prompt("Insira o terceiro valor:"));
    var val4 = parseFloat(prompt("Insira o quarto valor:"));

    var resultado = valoresMath(val1, val2, val3, val4);
    alert(resultado);
}

main();