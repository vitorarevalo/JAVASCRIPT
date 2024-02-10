// toLowerCase e toUpperCase

var frase = "Esta é a frase que vamos manipular";

console.log(frase.toLowerCase())

var fraseCaixaAlta = frase.toUpperCase()

console.log(fraseCaixaAlta)


// trim

var nome = "            Vitor Alexandre   ";
var nomeTrim = nome.trim();
console.log(nomeTrim);


// split

var tags = "PHP, Javascript, HTML, CSS"
console.log(tags.split(", "))


// lastIndexOf

var fraseDois = "Eu quero a última palavra teste desta frase de teste";
console.log(fraseDois.lastIndexOf("teste"))