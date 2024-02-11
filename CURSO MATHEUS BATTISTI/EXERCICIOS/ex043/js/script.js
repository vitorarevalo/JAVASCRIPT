function exibir(num){
    console.log("A operação resultou em " + num)
}

function soma(a, b, cb) {
    var soma = a + b
    cb(soma)
}

function mult(a, b, cb) {
    var mult = a * b
    cb(mult)
}


soma(2, 5, exibir)
mult(2,5, exibir)