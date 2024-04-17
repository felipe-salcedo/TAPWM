var altura = parseInt(prompt("Digite sua altura em centímetros:"));

if (isNaN(altura) || altura <= 0) {
    alert("Por favor, digite uma altura válida em centímetros.");
} else {
    var peso = parseInt(prompt("Digite seu peso em quilogramas:"));

    if (isNaN(peso) || peso <= 0) {
        alert("Por favor, digite um peso válido em quilogramas.");
    } else {
        var imc = peso / ((altura / 100) * (altura / 100));

        var mensagem = "Seu IMC é: " + imc.toFixed(2) + "\n\n";
        alert(mensagem);

        if (imc <= 18.5) {
            alert("IMC: Menor que 18,5 \nClassificação: Magreza \nObesidade (Grau): 0");
        } else if (imc >= 18.5 && imc <= 24.9) {
            alert("IMC: Entre 18,5 e 24,9 \nClassificação: Normal \nObesidade (Grau): 0");
        } else if (imc >= 25 && imc <= 29.9) {
            alert("IMC: Entre 25,0 e 29,9 \nClassificação: Sobrepeso \nObesidade (Grau): I");
        } else if (imc >= 30 && imc <= 39.9) {
            alert("IMC: Entre 30,0 e 39,9 \nClassificação: Obesidade \nObesidade (Grau): II");
        } else {
            alert("IMC: Maior que 40,0 \nClassificação: Obesidade Grave \nObesidade (Grau): III")
        }
    }
}
