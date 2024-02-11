// setTimeout
setTimeout(function(){
    console.log("Testando o setTimeout")
}, 2000)

setTimeout(function aviso(){
    var title = document.querySelector("#title");
    title.textContent = "CUIDADO!! TEM UMA FUNÇÃO SENDO ATIVADA A CADA 10 SEGUNDOS!"
    var novo = title.style.cssText = "color: red; background-color: #ffc0c0; font-family: Arial, Helvetica, sans-serif;"
}, 2000)

setTimeout(function aviso2(){
    var par = document.createElement("p")
    var texto = document.createTextNode("Esse é um site de teste, permanecer nele por muito tempo pode causar travamentos para seu navegador!")
    par.appendChild(texto)
    var antes = document.querySelector(".subtitle")
    var body = document.querySelector("#body")
    body.insertBefore(par, antes)

    par.style.cssText = "font-size: 1.5em; background-color: #ffc0c0; font-family: Arial, Helvetica, sans-serif;"
    
}, 2000)

// setInterval
setInterval(function(){
    console.log("Teste")
}, 10000)