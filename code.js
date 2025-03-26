function media (tamanhoArray){
  
  let soma = 0;
  for(contador = 0; contador< tamanhoArray; contador++){
    soma = soma+numeromedia[contador];
  }
  return media = soma / numeromedia.lenght;

}

let numeromedia = [];
let acabou = false
while(acabou == false){
  let numero = parseInt(prompt("digite um número para calcular sua média, ao terminar a sequencia, digite algum texto"))

  if(isNaN(numero)){
      acabou = true;
  } else{
    numeromedia.push(numero);

  }
}

console.log(numeromedia);
alert(media(numeromedia.lenght));


