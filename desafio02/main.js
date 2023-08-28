function verificar(nome){
  var data = new Date() //data atual
  var ano = data.getFullYear()  //ano atual
  var anoUsuario = document.querySelector('#txtano')  //anodo usuario
  var res = document.querySelector('#res') //texto
  
  if (anoUsuario.value.length == 0 || Number(anoUsuario.value) > ano){
    res.innerHTML = '[ERRO] Verifique os dados e tente novamente'
  } else {
    var forsex = document.querySelector('#sexo')
    var idade = ano - Number(anoUsuario.value)
    var genero = 'teste';
  
  res.innerHTML = 'Voce é '+nome+' com '+idade+' anos de idade.'
  
  
  }
  }


