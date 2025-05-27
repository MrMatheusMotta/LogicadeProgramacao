//  condicionais if else, aninhado

//  Aplique os descontos de acordo com o valor da compra :
// acima de 1000 -> 15%
//  entre 500 e 1000 -> 10%
// abaixo de 500 -> 5%

let valor = 2000;
let desconto = 0;


if(valor > 1000){
    desconto = valor * 0.15;    
}else if(valor >= 500 && valor <= 1000){
    desconto = valor * 0.10;
}else{
    desconto = valor *0.05;
}

console.log(`Desconto: R$ ${desconto.toFixed(2)}`)