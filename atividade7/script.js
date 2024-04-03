function jogar() {
    var opcoes = ["Pedra", "Papel", "Tesoura"];

    var escolhaComp = Math.floor(Math.random() * 3) + 1;

    var escolhaUser = parseInt(prompt("Escolha: \n 1 - Pedra \n 2 - Papel \n 3 - Tesoura"));

    if (escolhaUser < 1 || escolhaUser > 3 || isNaN(escolhaUser)) {
        alert("Escolha inválida! Por favor, escolha entre 1 para Pedra, 2 para Papel ou 3 para Tesoura.");
        return;
    }

    alert("Você escolheu: " + opcoes[escolhaUser - 1] + 
        "\nO computador escolheu: " + opcoes[escolhaComp - 1]);

    if (escolhaUser === escolhaComp) {
        alert("Empate")
    } else if ((escolhaUser === 1 && escolhaComp === 3) || (escolhaUser === 2 && escolhaComp === 1) 
        || (escolhaUser === 3 && escolhaComp === 2)) {
        alert("Você venceu!!!");
    } else {
        alert("Computador venceu!!!");
    }
}

jogar();