
var teste = 5;
console.log(this.teste)

let pessoa = {
    nome: "Vitor",
    idade: 16,
    falar: function() {
        console.log("Olá, tudo bem?");
    },
    dizerNome: function() {
        console.log("O nome é " + this.nome)
    },
    aniversario: function() {
        this.idade += 1;
    },
    saudacao: function() {
        return "Sr. " + this.nome;
    }
}

pessoa.dizerNome();

console.log(pessoa.idade)

pessoa.aniversario();

console.log(pessoa.idade)


pessoa.saudacao()
var sdc = pessoa.saudacao()
console.log("Olá " + sdc)