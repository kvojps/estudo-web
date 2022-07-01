//object literal
const lampada = {
    potencia : 100,
    cor: "branca",
    ligada: true,
    ligarDesligar: function() {
        console.log("bazinga")
    }
};

console.log("Mostrando estrutura com object literal")
console.log(lampada)
console.log(lampada.potencia)
console.log(lampada["potencia"])
lampada.ligarDesligar()

const potencia = 100, cor = "branca", ligada = true, ligarDesligar = function() {console.log(lamp)}
const lampadinha = {potencia, cor, ligada, ligarDesligar}

console.log("")
console.log("Mostrando a estrutura com shorthand")
console.log(lampadinha)

const lampadaNova = {...lampadinha}
console.log("")
console.log("Mostrando a estrutura do objeto criado com spread")
console.log(lampadaNova)

console.log("")
console.log("Mostrando a estrutura do objeto depois de modificar dinamicamente")
lampadaNova.led = true;
console.log(lampadaNova)

console.log("")
console.log("Mostrando a estrutura do objeto depois de remover dinamicamente")
delete lampadaNova.led
console.log(lampadaNova)