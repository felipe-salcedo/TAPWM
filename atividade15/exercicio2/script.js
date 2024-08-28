class Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo) {
        this._nomeCorrentista = nomeCorrentista;
        this._banco = banco;
        this._numeroConta = numeroConta;
        this._saldo = saldo;
    }

    get nomeCorrentista() {
        return this._nomeCorrentista;
    }

    set nomeCorrentista(nome) {
        this._nomeCorrentista = nome;
    }

    get banco() {
        return this._banco;
    }

    set banco(banco) {
        this._banco = banco;
    }

    get numeroConta() {
        return this._numeroConta;
    }

    set numeroConta(numero) {
        this._numeroConta = numero;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(saldo) {
        this._saldo = saldo;
    }

    mostrarDados() {
        return `Nome do Correntista: ${this._nomeCorrentista}\nBanco: ${this._banco}\nNúmero da Conta: ${this._numeroConta}\nSaldo: R$ ${this._saldo.toFixed(2)}`;
    }
}

class Corrente extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial) {
        super(nomeCorrentista, banco, numeroConta, saldo);
        this._saldoEspecial = saldoEspecial;
    }

    get saldoEspecial() {
        return this._saldoEspecial;
    }

    set saldoEspecial(saldoEspecial) {
        this._saldoEspecial = saldoEspecial;
    }

    mostrarDados() {
        return `${super.mostrarDados()}\nSaldo Especial: R$ ${this._saldoEspecial.toFixed(2)}`;
    }
}

class Poupanca extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento) {
        super(nomeCorrentista, banco, numeroConta, saldo);
        this._juros = juros;
        this._dataVencimento = dataVencimento;
    }

    get juros() {
        return this._juros;
    }

    set juros(juros) {
        this._juros = juros;
    }

    get dataVencimento() {
        return this._dataVencimento;
    }

    set dataVencimento(dataVencimento) {
        this._dataVencimento = dataVencimento;
    }

    mostrarDados() {
        return `${super.mostrarDados()}\nJuros: ${this._juros}%\nData de Vencimento: ${this._dataVencimento}`;
    }
}

function criarContaCorrente() {
    const nomeCorrentista = prompt("Insira o nome do correntista:");
    const banco = prompt("Insira o nome do banco:");
    const numeroConta = prompt("Insira o número da conta:");
    const saldo = parseFloat(prompt("Insira o saldo da conta:"));
    const saldoEspecial = parseFloat(prompt("Insira o saldo especial da conta corrente:"));

    return new Corrente(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial);
}

function criarContaPoupanca() {
    const nomeCorrentista = prompt("Insira o nome do correntista:");
    const banco = prompt("Insira o nome do banco:");
    const numeroConta = prompt("Insira o número da conta:");
    const saldo = parseFloat(prompt("Insira o saldo da conta:"));
    const juros = parseFloat(prompt("Insira a taxa de juros anual da poupança:"));
    const dataVencimento = prompt("Insira a data de vencimento (DD/MM/AAAA):");

    return new Poupanca(nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento);
}

const contaCorrente = criarContaCorrente();
const contaPoupanca = criarContaPoupanca();

alert("Dados da Conta Corrente:");
alert(contaCorrente.mostrarDados());

alert("\nDados da Conta Poupança:");
alert(contaPoupanca.mostrarDados());
