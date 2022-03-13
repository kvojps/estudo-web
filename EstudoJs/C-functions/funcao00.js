function minhaFuncao(objeto) {
    objeto.make = "Toyota"
}

var meuCarro = {make: "Honda", model: "Accord", year: 1998}
minhaFuncao(meuCarro)

//fatorial recursivo
var fatorial = function fac(n) {return n<2 ? 1 : n*fac(n-1)};

function fatorial(n) {
    if ((n = 0) || n == 1)
        return 1
    else
        return (n * fatorial(n-1))    
}

//função map
function map(f,a) {
    var result = []; // Cria um novo Array
    var i;
    for (i = 0; i != a.length; i++)
      result[i] = f(a[i]);
    return result;
  }
  
console.log(map(function(x) {return x * x * x}, [0, 1, 2, 5, 10]))

/* uma closure é uma função  interna pode usar os argumentos e variáveis da função externa,
enquanto a função externa não pode usar os argumentos e variáveis da função interna.*/

function addSquares(a,b) {
    function square(x) {
       return x * x;
    }
    return square(a) + square(b);
 }




