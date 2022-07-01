function imprimirJogadas() {
    var jogada = "pedra"

    function jogar() {
        console.log(jogada)
    }

    return jogar;
}

const novaFuncao = imprimirJogadas()
novaFuncao();