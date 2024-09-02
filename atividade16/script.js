document.addEventListener('DOMContentLoaded', function () {
    const imagemJanela = document.getElementById('imagem-janela');
    const titulo = document.getElementById('titulo');

    // Função para atualizar a imagem e o título
    function atualizarJanela(src, texto) {
        imagemJanela.src = src;
        titulo.textContent = texto;
    }

    // Eventos de mouse sobre a imagem
    imagemJanela.addEventListener('mouseover', function () {
        atualizarJanela('janelaAberta.png', 'Janela Aberta');
    });

    imagemJanela.addEventListener('mouseout', function () {
        atualizarJanela('janelaFechada.png', 'Janela Fechada');
    });

    imagemJanela.addEventListener('click', function () {
        atualizarJanela('janelaQuebrada.png', 'Janela Quebrada');
    });
});
