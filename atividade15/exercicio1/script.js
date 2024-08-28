class Retangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return this.base * this.altura;
    }
}

const base = parseFloat(prompt("Insira o valor para a base do retângulo:"));
const altura = parseFloat(prompt("Insira o valor para a altura do retângulo:"));
const retangulo = new Retangulo(base, altura);
const area = retangulo.calcularArea();
alert("A área do retângulo é: " + area);
