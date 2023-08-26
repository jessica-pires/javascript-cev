var agora = new Date()
var relogio = agora.getHours()// capta a hora atual do servidor

//var hora = 13

if(hora <12){
    console.log('BOM DIA')
}else if(hora <= 18){
    console.log('BOA TARDE')
}else if(hora <= 24){
    console.log('BOA NOITE')
} else{
    console.log('BOA MADRUGADA')
}
