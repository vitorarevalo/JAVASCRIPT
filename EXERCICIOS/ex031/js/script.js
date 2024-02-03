let pessoa = {
    nome: "Vitor",
    idade: 16,
    falar: function() {
        console.log("Olá, tudo bem?");
    },
    soma: function(a, b) {
        return a + b;
    }
}

console.log(pessoa.nome)

pessoa.falar()

var soma = pessoa.soma(2, 2)

console.log(soma)

function soma1(a, b) {
    return a + b
}


var soma1 = soma1(10, 40)
console.log("A soma é " + soma1)