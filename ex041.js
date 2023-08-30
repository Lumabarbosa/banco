// propriedades: conta, saldo, tipo de conta, agência

// métodos: buscar saldo, depósito, saque e número da conta
// buscar saldo: deve retornar saldo atual
// depósito: passar valor como parametro e somá-lo ao saldo final
// saque: passar valor como parametro e subtraí-lo ao saldo final
// numero da conta: retorna o numero

//criando objeto por inicialização de objeto
/*
var banco = new Object()
    banco.conta = 100016;
    banco.saldo = 1000;
    banco.tipoConta = "corrente";
    banco.agencia = 5290
    banco.mostrarSaldo = function saldoValor (){
        console.log(this.saldo)
    }

var banco = {conta: 100.6,
    saldo: 1000,
    tipoConta: corrente,
    agencia: 5678,
}
var minhaConta
*/


// criando objetos por função
function Banco(conta, saldo, tipoConta, agencia) {
    this.conta = conta;
    this.saldo = saldo;
    this.tipoConta = tipoConta;
    this.agencia = agencia;
    mostrarSaldo = function saldoValor(){
        console.log(this.saldo)
    }
}
var minhaConta = new Banco(100.6, 1000, "conta corrente", 5678) //instanciando o objeto(Banco) em uma variavel

console.table(minhaConta)


//metodo numConta criado a partir do objeto banco
var mostrarSaldo = function saldoValor(){
    console.log(this.saldo)
} 

// metodo 
