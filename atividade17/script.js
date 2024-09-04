function alterarTexto() {
    const textoInput = document.getElementById('texto');
    let texto = textoInput.value;

    const maiusculoCheckbox = document.getElementById('maiusculo');
    const minusculoCheckbox = document.getElementById('minusculo');

    if (maiusculoCheckbox.checked) {
        textoInput.value = texto.toUpperCase();
    } else if (minusculoCheckbox.checked) {
        textoInput.value = texto.toLowerCase();
    }
}

document.getElementById('texto').addEventListener('input', alterarTexto);
