function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('stringano')
    var res = document.querySelector('div#res')

    if (Number(fano.value) > ano || fano.value.length <= 0 )
        window.alert('[ERRO]Verifique os dados e tente novamente')

    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'criança m.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovem m.jpg')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adulto.jpg')
            }else {
                //idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'criança f.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovem f.jpg')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adulta.jpg')
            }else {
                //idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }



}


