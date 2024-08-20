function calcular(array) {
    function soma(a, b, c) {
        return a + b + c;
    }

    function quadrado(x) {
        return x * x;
    }

    const somaTotal = soma.apply(null, array);
    const primeiroQuadrado = quadrado.apply(null, [array[0]]);
    const segundoQuadrado = quadrado.apply(null, [array[1]]);

    return {
        soma: somaTotal,
        primeiroQuadrado: primeiroQuadrado,
        segundoQuadrado: segundoQuadrado
    };
}

const numeros = [];
for (let i = 0; i < 3; i++) {
    const numero = parseFloat(prompt(`Digite o número ${i + 1}:`));
    numeros.push(numero);
}

const resultado = calcular(numeros);

alert(`Soma: ${resultado.soma}`);
alert(`Quadrado do primeiro número: ${resultado.primeiroQuadrado}`);
alert(`Quadrado do segundo número: ${resultado.segundoQuadrado}`);
