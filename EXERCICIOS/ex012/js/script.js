var idade = 14;
var possuiCarro = 0;

if(idade >= 18) {
    console.log("Já que a idade é " + idade + " anos, o usuário pode fazer a carteira.")
}

if (idade <= 17) {
    console.log("Já que a idade é " + idade + " anos, o usuário não pode fazer a carteira.")
}

if (possuiCarro) {
    console.log("O usuário já pode andar de carro");
}

var nome = "Vitor";

if (nome == "Vitor") {
    console.log("Seja bem-vindo, Vitor!")
}

if (nome != "Vitor") {
    console.log("Olá, " + nome)
}

var nota1 = 5;
var nota2 = 5;
var media = (nota1 + nota2)/2


if(media >= 6) {
    console.log("Parabéns, você passou de ano com a média de " + media)
} else{
    console.log("Infelizmente, você reprovou...")
}