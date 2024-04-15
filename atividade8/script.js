let totalIdade = 0;
let idadeMaisVelha = 0;
let idadeMaisNova = Infinity;
let totalPessimo = 0;
let totalOtimoBom = 0;
let totalMulheres = 0;
let totalHomens = 0;
let totalPessoas = 0;

while (true) {
    let idade = parseInt(prompt("Digite a idade:"));
    let sexo = prompt("Digite o sexo (M/F):").toUpperCase();
    let opinião = parseInt(prompt("Digite a opinião (1-Péssimo, 2-Regular, 3-Bom, 4-Ótimo):"));

    if (isNaN(idade) || !(sexo === 'M' || sexo === 'F') || isNaN(opinião) || opinião < 1 || opinião > 4) {
        alert("Por favor, digite dados válidos!");
        continue;
    }

    totalIdade += idade;

    if (idade > idadeMaisVelha) {
        idadeMaisVelha = idade;
    }
    
    if (idade < idadeMaisNova) {
        idadeMaisNova = idade;
    }

    if (opinião === 1) {
        totalPessimo++;
    }

    if (opinião === 3 || opinião === 4) {
        totalOtimoBom++;
    }

    if (sexo === 'M') {
        totalHomens++;
    } else {
        totalMulheres++;
    }

    totalPessoas++;

    let continuar = prompt("Deseja continuar? (S/N)").toUpperCase();
    if (continuar !== 'S') {
        break;
    }
}

let mediaIdade = totalIdade / totalPessoas;

let porcentagemOtimoBom = (totalOtimoBom / totalPessoas) * 100;

alert("Média de idade: " + mediaIdade.toFixed(2) + "\n" +
    "Idade da pessoa mais velha: " + idadeMaisVelha + "\n" +
    "Idade da pessoa mais nova: " + idadeMaisNova + "\n" +
    "Quantidade de pessoas que responderam péssimo: " + totalPessimo + "\n" +
    "Porcentagem de pessoas que responderam ótimo e bom: " + porcentagemOtimoBom.toFixed(2) + "%\n" +
    "Número de mulheres: " + totalMulheres + "\n" +
    "Número de homens: " + totalHomens);
