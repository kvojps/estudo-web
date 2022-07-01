if(true) {
    const fun = "escopo de bloco const"
    let fun2 = "escopo de bloco let"
    var fun3 = "escopo de bloco var"
}
console.log(fun)//fun is not defined
console.log(fun2)//fun is not defined
console.log(fun3)//escopo de bloco de var