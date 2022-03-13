function calcular() {
    var num = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')

    if(num.value.length == 0) {
        alert("Por favor, digite um número")
    } else {
        var numero = Number(num.value)
        tab.innerHTML = ''
        for(c = 1; c <= 10; c ++) {
            var item = document.createElement('option')
            item.text = `${numero} X ${c} = ${numero*c}`
            tab.appendChild(item)
        }
    }
}

var listaNum = []

function adicionar() {
    var num = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')

    if(num.value.length == 0) {
        alert("Por favor, digite um número")
    } else {
        var numero = Number(num.value)
        listaNum.push(numero)
        tab.innerHTML = ''
    
        for(pos in listaNum) {
            var item = document.createElement('option')
            item.text = `Valor ${listaNum[pos]} adicionado`
            tab.appendChild(item)
        }
    }

    num.value = ''
    num.focus()
}

function finalizar() {
    var res = document.querySelector('div#res')
    
    var maior = listaNum[0]
    var menor = listaNum[0]
    var soma = 0
    var media = 0

    for (var pos in listaNum) {
        soma += listaNum[pos]
        if(listaNum[pos] > maior) 
            maior = listaNum[pos]
        if(listaNum[pos] < menor)
            menor = listaNum[pos]
    }

    media = soma / (listaNum.length)


    res.innerHTML = `Ao todo temos ${listaNum.length} números cadastrados.<br/>`
    res.innerHTML += `O maior valor informado foi ${maior} <br/>`
    res.innerHTML += `O menor valor informado foi ${menor}<br/>`
    res.innerHTML += `Somando todos os valores temos ${soma}<br/>`
    res.innerHTML += `A média dos valores digitados é  ${media}`

}