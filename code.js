function calcular (numero1, numero2){
    const soma = numero1 + numero 2;
    const subtracao = numero1 + numero2;
    const divisao = numero2 !== 0 ? numero1 / numero2 : 'não pode dividir por zero';
    const multiplicacao = numero1 * numero 2;
    
    console.log(soma);
    console.log(subtracao);
    console.log(divisao);
    console.log(multiplicacao);
}

let numero1 = parseFloat(prompt("digite seu primeiro número"));
let numero2 = parseFloat(prompt("digite seu primeiro número"));

calcular(numero1,numero2);