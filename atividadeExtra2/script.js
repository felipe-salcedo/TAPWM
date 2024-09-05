document.getElementById("curso").onchange = function () {
    const select = document.getElementById("curso");
    const cursoSelecionado = select.value;

    if (cursoSelecionado === "") {
        return;
    }

    const confirmacao = confirm("Deseja abrir informações sobre o curso de " + cursoSelecionado + "?");

    if (confirmacao) {
        let conteudoCurso = "";

        switch (cursoSelecionado) {
            case "ADS":
                conteudoCurso = "<h1>Análise e Desenvolvimento de Sistemas</h1><p>O curso de ADS forma profissionais para criar, desenvolver e gerenciar sistemas computacionais.</p>";
                break;
            case "Logística":
                conteudoCurso = "<h1>Logística</h1><p>O curso de Logística capacita para a gestão eficiente de cadeias de suprimentos e transporte de mercadorias.</p>";
                break;
            case "Projetos Mecânicos":
                conteudoCurso = "<h1>Projetos Mecânicos</h1><p>O curso de Projetos Mecânicos ensina o planejamento, design e fabricação de sistemas e componentes mecânicos.</p>";
                break;
            case "Polímeros":
                conteudoCurso = "<h1>Polímeros</h1><p>O curso de Polímeros prepara profissionais para trabalhar com materiais plásticos, seu desenvolvimento e aplicação.</p>";
                break;
        }

        const novaJanela = window.open("", "_blank", "width=600,height=300");
        novaJanela.document.write(conteudoCurso);
    }
}