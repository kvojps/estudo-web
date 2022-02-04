function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoUsuario = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (anoUsuario.value.length == 0 || anoUsuario.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente !')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(anoUsuario.value)
        var genero = ''
        var img = document.createElement('Img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'src/bebe-M.jpeg')
            } else if (idade < 21) {
                img.setAttribute('src', 'src/jovem-M.jpeg')
            } else if (idade < 50) {
                img.setAttribute('src', 'src/adulto-M.jpeg')
            } else {
                img.setAttribute('src', 'src/idoso-M.jpeg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'src/bebe-F.jpeg')
            } else if (idade < 21) {
                img.setAttribute('src', 'src/jovem-F.jpeg')
            } else if (idade < 50) {
                img.setAttribute('src', 'src/adulto-F.jpeg')
            } else {
                img.setAttribute('src', 'src/idoso-F.jpeg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} com ${idade} anos`
        res.appendChild(img)
    }

}