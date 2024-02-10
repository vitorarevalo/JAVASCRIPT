// Criando o elemento
var el = document.createElement("h3");

el.classList = "teste-classe"

var texto = document.createTextNode("Testando a substituição de texto.");

el.appendChild(texto);

console.log(el);

// Selecionar o elemento que quero substituir
var lista = document.querySelector("#lista");

var pai = lista.parentNode

console.log(pai)

pai.replaceChild(el, lista)



// Criar um Elemento

var el = document.createElement("h3");

el.classList = "testando-classe";

var texto = document.createTextNode("Este é o texto do h3.")

el.appendChild(texto);
console.log(el);

// Selecionar Elemento que quero Trocar
var title = document.querySelector("#title");
console.log(title);

// Selecionar o Pai do Elemento
var pai = title.parentNode;

// Trocar os Elementos

pai.replaceChild(el, title)



