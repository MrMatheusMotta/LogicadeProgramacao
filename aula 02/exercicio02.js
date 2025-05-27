// Exercício : Faça um programa que receba 4 notas e faça a média destas notas
// no final o programa vai informar ao aluno : média<=5 "Reprovado", médias > 5 < 7 " recuperação"
// média > 7 " Aprovado"

// Faça o fluxograma dos programas acima. site draw.io



let n1 = 3;
let n2 = 3;
let n3 = 3; 
let n4 = 3;

let media = (n1 + n2 + n3 + n4)/4;

// if(media <=5){
//     console.log("Aluno reprovado")
// }
//  else if(media > 5 && resultado <7){
//     console.log("Aluno em recuperação")
// }
//    else{
//     console.log("APROVADO!")
// }

// operador ternário 

console.log(media < 5 ? "Reprovado!" : media > 5 && media < 7 ? " Recuperação!" : " Aprovado!")