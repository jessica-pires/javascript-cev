function verificar(){
   var data = new Date() //data atual
   var ano = data.getFullYear()  //ano atual
   var anoUsuario = document.querySelector('#txtano')  //ano do usuario
   var res = document.querySelector('#res') //texto 
   if(anoUsuario.ariaValueMax.length == 0 || anoUsuario.value > ano){
    window.alert('[ERRO] Verifique os dados e tente novamente')
   }else{
    var forsex = document.querySelector('#sexo')
    var idade = ano - parseInt(anoUsuario.value)
    res.innerHTML = `Idade calculada ${idade}`
   }
 }