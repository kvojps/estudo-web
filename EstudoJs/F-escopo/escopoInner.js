let jogada = "pedra"
function imprimirJogadas() {
    let jogada = "tesoura"
    console.log("Dentro da função", jogada)

    if (true) {
        let jogada = "papel"
        console.log("dentro do if", jogada)
    }
}

imprimirJogadas()
console.log("fora da funcao",jogada)