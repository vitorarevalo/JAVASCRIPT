
var x = 1; // Escopo Global
var y = 3;


console.log(x, y)


function teste() {

    var z = 0; // Escopo Local

    console.log(z)

}

teste()

    // console.log(z) Não é definida pois está num escopo local

    function testando() {
        var z = 5;
        console.log(z)
    }

testando()


if(true) {
    var p = 1;

}

console.log(p)