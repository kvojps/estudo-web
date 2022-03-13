function jogar() {
    var res = document.querySelector('div#res')
    var jogada1 = document.getElementsByName('radrps1')
    var jogada2 = document.getElementsByName('radrps2')

    if(jogada1[0].checked) {
        if (jogada2[0].checked) {
            res.innerHTML = 'Empate!'
        }
        else if(jogada2[1].checked) {
            res.innerHTML = 'Jogador 2 venceu!'
        } else {
            res.innerHTML = 'Jogador 1 venceu!'
        }
    }

    if(jogada1[1].checked) {
        if (jogada2[0].checked) {
            res.innerHTML = 'Jogador 1 venceu!'
        }
        else if(jogada2[1].checked) {
            res.innerHTML = 'Empate!'
        } else {
            res.innerHTML = 'Jogador 2 venceu!'
        }
    }

    if(jogada1[2].checked) {
        if (jogada2[0].checked) {
            res.innerHTML = 'Jogador 2 venceu!'
        }
        else if(jogada2[1].checked) {
            res.innerHTML = 'Jogador 1 venceu!'
        } else {
            res.innerHTML = 'Empate!'
        }
    }
}