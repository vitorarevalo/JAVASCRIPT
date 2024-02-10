var nome = "Xavier";

if(nome == "Pedro") {
    console.log("O nome dele é Pedro");
} else if(nome == "Vitor"){
    console.log("O nome é Vitor");
} else if(nome == "Xavier"){
    console.log("Olá Xavier!")
} else {
    console.log("Ele possui outro nome.")
}

var idade = 14;

if(idade >= 19) {
    console.log("Ele pode entrar na festa pois tem " + idade + " anos.")
} else if(idade <= 18) {
    console.log("Ele só pode entrar com autorização.")
}


if(nome == "Vitor") {
    console.log("Olá Vitor, seja bem-vindo!")
} else {
    console.log("Olá, " + nome)
}