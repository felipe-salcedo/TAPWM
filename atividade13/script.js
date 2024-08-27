//Literal
var aluno1 = {
    ra: "00001234",
    nome: "Adrian"
};
alert(`ra=${aluno1.ra} nome=${aluno1.nome}`);

//Classe
class Aluno {
    constructor(ra, nome) {
        this.ra = ra;
        this.nome = nome;
    }
}

var aluno1 = new Aluno("00001234", "Adrian");
alert(`ra=${aluno1.ra} nome=${aluno1.nome}`);


//Função construtora
function Aluno(ra, nome) {
    this.ra = ra;
    this.nome = nome;
}

var aluno1 = new Aluno("00001234", "Adrian");
alert(`ra=${aluno1.ra} nome=${aluno1.nome}`);
