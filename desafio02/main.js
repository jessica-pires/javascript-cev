function verificar(){
  var data = new Date() //data atual
  var ano = data.getFullYear()  //ano atual
  var anoUsuario = document.querySelector('#txtano')  //anodo usuario
  var res = document.querySelector('#res') //texto 
  if (anoUsuario.value.length == 0 || Number(anoUsuario.value) > ano){
    window.alert('[ERRO] Verifique os dados e tente novamente')
  } else {
    var forsex = document.querySelector('#sexo')
    var idade = ano - Number(anoUsuario.value)
    var genero =''
    if (forsex[0].checked){
      genero = 'homem'
    } else if (forsex[1].checked){
      genero = 'mulher'
    }
    res.innerHTML = `detectamos ${genero} com ${idade} anos!`
  }   
}
