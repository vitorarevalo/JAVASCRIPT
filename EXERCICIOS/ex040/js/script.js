// Adicionar Atributos
var title = document.querySelector("#title");

title.setAttribute("id", "testando-id");

console.log(title);

var btn = document.querySelector("#btn");

btn.setAttribute("disabled", "disabled");

// Remover Atributos
var lista = document.querySelector("#lista");

lista.removeAttribute("id")