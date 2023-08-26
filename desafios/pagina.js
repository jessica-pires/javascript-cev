function carregar(){
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagens')
    var data = new Date()
    var hora = data.getHours()
    //var minutos = data.getMinutes()
    //var seguntos = data.getSeconds()
    //var formatoHoras = `${hora}h ${minutos} minutos`
    msg.innerHTML = `Agora são ${hora}`
    
    if (hora >= 0 && hora < 12){
        //bom dia 
        img.src = 'manha.png'
        document.body.style.background = 'rgb(199 227 255 / 78%)'
    }else if (hora >=12 && hora <18){
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background = 'rgb(236 192 92 / 93%)'
    }else{
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = 'rgb(14 14 18 / 78%)'
    }

}