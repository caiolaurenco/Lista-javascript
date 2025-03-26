function substituirPalavra(){
  console.log("substituir palavra azul por vermelho!")
  let texto = prompt ('Digite uma frase ou texto com a palavra azul');
  console.log(texto.replace(/azul/g, "vermelho"));
}