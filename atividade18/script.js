document.querySelector('form').onsubmit = function validar(event) {
    event.preventDefault(); // Evita o envio automático do formulário

    // Aciona o botão Limpa
    const mensagemElemento = document.getElementById('mensagem');
    mensagemElemento.textContent = '';

    // Validação da pesquisa
    const radios = document.nomeform.elements['primeiraVez'];
    let pesquisaObrigatoria = false;
    let mensagemPesquisa = '';

    // Verifica se um dos radios foi selecionado
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            pesquisaObrigatoria = true;
            if (radios[i].id === 'sim') {
                mensagemPesquisa = 'Volte sempre à esta página!';
            } else {
                mensagemPesquisa = 'Que bom que você voltou a visitar esta página!';
            }
        }
    }

    if (!pesquisaObrigatoria) {
        mensagemElemento.textContent = 'Por favor, responda à pesquisa.';
        return false;
    }

    const email = document.nomeform.elements['email'].value;
    if (!email.includes('@') || !email.includes('.')) {
        mensagemElemento.textContent = 'Por favor, insira um email válido com "@" e ".".';
        return false;
    }

    // Exibe a mensagem da pesquisa no H1
    mensagemElemento.textContent = mensagemPesquisa;

    return true;
}