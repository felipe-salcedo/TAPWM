function valores(val1, val2, val3, val4) {
    if (val1 > val2 && val1 > val3 && val1 > val4) {
        return "O " + val1 + " é o maior valor."
    } else if (val2 > val1 && val2 > val3 && val2 > val4) {
        return "O " + val2 + " é o maior valor."
    } else if (val3 > val1 && val3 > val2 && val3 > val4) {
        return "O " + val3 + " é o maior valor."
    } else if (val4 > val1 && val4 > val2 && val4 > val3) {
        return "O " + val4 + " é o maior valor."
    } else {
        return "Digite valores diferentes ou apenas números."
    }
}

function main() {
    var val1 = parseFloat(prompt("Insira o primeiro valor:"));
    var val2 = parseFloat(prompt("Insira o segundo valor:"));
    var val3 = parseFloat(prompt("Insira o terceiro valor:"));
    var val4 = parseFloat(prompt("Insira o quarto valor:"));

    var resultado = valores(val1, val2, val3, val4);
    alert(resultado);
}

main();