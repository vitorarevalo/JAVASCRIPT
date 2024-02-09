// tentando mais uma vez

var novoParagrafo = document.createElement("p");

var texto = document.createTextNode("Tentando mais uma vez usar essa técnica.");

novoParagrafo.appendChild(texto);

console.log(novoParagrafo);

var container = document.querySelector("#container");

container.appendChild(novoParagrafo)