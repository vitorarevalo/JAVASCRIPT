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



