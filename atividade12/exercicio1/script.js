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

const numeros = [2, 3, 4];
const resultado = calcular(numeros);

alert(`Soma: ${resultado.soma}`);
alert(`Quadrado do primeiro número: ${resultado.primeiroQuadrado}`);
alert(`Quadrado do segundo número: ${resultado.segundoQuadrado}`);
