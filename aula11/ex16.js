// estruturas aninhadas
var idade = 20
console.log(`voce tem ${idade} anos de idade!`)
if(idade <16){
    console.log('voce é de menor, Você nao vota')
}else if(idade >= 16 && idade<18 || idade >=65){
    console.log('Seu voto é opcional')
}else{
    console.log('Voce é de maior seu voto é obrigátorio!')
}