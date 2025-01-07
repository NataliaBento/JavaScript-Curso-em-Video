var idade = 25

if (idade < 16){

    console.log('Você ainda não pode votar!')
}
else if (idade >= 16 && idade < 18 || idade >=60)   {

    console.log('Seu voto é facultativo, vote se quiser')
}
else {
    console.log('Seu voto é obrigatório, você deve votar!')
}

//&& significa E ou and em javascript 
// || significa OU em java script 
// tenho que declarar a variável na hora da condição, ex: tenho que colocar explicitamente o que quero comparar idade > 60 etc. 
// != siginifca diferente em javascript
// == identico 
// += acrescentando mais um 
// -= diminuindo menos um 