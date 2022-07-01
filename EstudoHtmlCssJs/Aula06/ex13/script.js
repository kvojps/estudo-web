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