// Inserir elemento no body
var novoParagrafo = document.createElement("p");

var texto = document.createTextNode("Este é o conteúdo do parágrafo.");

novoParagrafo.appendChild(texto);

console.log(novoParagrafo);

var body = document.querySelector("body");
console.log(body)
body.appendChild(novoParagrafo);

// Inserir em um Container
    var novoParagrafo2 = document.createElement("p");

    var texto2 = document.createTextNode("Entenda os problemas de estudar por muitas horas.");

    novoParagrafo2.appendChild(texto2);

    console.log(novoParagrafo2)

    var container = document.querySelector("#container");
    container.appendChild(novoParagrafo2)
