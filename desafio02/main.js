function verificar(){
   var data = new Date() //data atual
   var ano = data.getFullYear()  //ano atual
   var anoUsuario = document.querySelector('#txtano')  //ano do usuario
   var res = document.querySelector('#res') //texto 
if(anoUsuario.value.length == 0 || Number(anoUsuario.value) > ano){//notificar se a caixa esta vazia ou ano que nao chegou ainda.
    window.alert('[ERRO] Verifique os dados e tente novamente')
} else {
      var forsex = document.querySelector('#sexo')
      var idade = ano - Number(anoUsuario.value)
      var genero = ''
      if(forsex[0].checked) {
        genero = 'homen'
      } else if (forsex[1].checked){
        genero = 'mulher'
    }

    res.innerHTML = `detectamos ${genero} de ${idade} anos!`
}

}