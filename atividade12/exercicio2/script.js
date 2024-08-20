/*function verificarSubconjunto(palavra1, palavra2) {
    const palavra1 = prompt("Digite a primeira palavra:");
    const palavra2 = prompt("Digite a segunda palavra:");

    if (!palavra1 || !palavra2) {
        return "erro";
    }

    if (palavra1.includes(palavra2)) {
        return "É um subconjunto";
    } else {
        return "Não é um subconjunto";
    }
}

alert(verificarSubconjunto());*/

function verificarSubconjunto() {
    const palavra1 = prompt("Digite a primeira palavra:");
    const palavra2 = prompt("Digite a segunda palavra:");

    if (!palavra1 || !palavra2) {
        return "erro";
    }

    if (palavra1.includes(palavra2)) {
        return "É um subconjunto";
    } else {
        return "Não é um subconjunto";
    }
}

alert(verificarSubconjunto());
