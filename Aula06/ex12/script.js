function contar() {
    inicio = document.getElementById('txtinicio')
    fim = document.getElementById('txtfim')
    passo = document.getElementById('txtpasso')
    res = document.querySelector('div#res')
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo inválido, considerando passo = 1')
            p = 1
        }

        if(i < f) {
            //Contagem crescente
            for(var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F596}`
            }
        } else {
            //Contagem decrescente
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F596}`
            }
        }
    }
}