function criaLampada(potencia = 100, cor = "branca", ligada = true) {
    return {
        potencia,
        cor,
        ligada,
        ligarDesligar: function() {
            console.log("bazinga")
        }
    }
}

const lampadaFactory0 = criaLampada();
const lampadaFactory1 = criaLampada(200);
console.log("Mostrando estrutura do objeto lampada com factory")
console.log(lampadaFactory0)
console.log("")
console.log(lampadaFactory1)