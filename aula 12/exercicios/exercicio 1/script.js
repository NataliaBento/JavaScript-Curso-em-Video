function carregar () {
    var img = document.getElementById('imagem')
    var msg = document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = (`Agora são ${hora} horas`)

    if (hora >=0 && hora <=12){
        document.body.style.background = '#F7DE00'
        msg.innerHTML = ('BOM DIA!') 
        img.src = 'manhã.jpg'
    }
    else if (hora >= 12 && hora < 18 ){
        document.body.style.background = '#F69032'
        msg.innerHTML = ('BOA TARDE!')
        img.src = 'tarde.jpg'
    }
    else {
        document.body.style.background = '#0043C0'
        msg.innerHTML = ('BOA NOITE!')
        img.src = 'noite.jpg'
    }    
}


