function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours ()
    //var hora = 20 (por hora ou tirar pra usar a hora atual)
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora < 12) {
        //BOM DIA !
        img.src = 'imagemmanha.jpg'
        document.body.style.background = '#ffe3ab'
    } else if (hora >= 12 && hora <=18) {
        //BOA TARDE !
        img.src = 'imagemtarde.jpg'
        document.body.style.background = '#ffca5f'
    } else {
        //BOA NOITE !
        img.src = 'imagemnoite.jpg'
        document.body.style.background = '#6e3a83'
    }
}