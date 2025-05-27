// tipos de variáveis - var, let e const
// redeclaração
let nome = "Matheus H";
nome = "Motta Ribeiro" // não pode redeclarar uma variável let com o mesmo nome : ex: let nome novamente.
console.log(nome);

// retribuição - mutabilidade
var valor1 = "Olá você !";
var valor1 = "Olá você !!!";
console.log(valor1);
// tipos e const
const valorIp = 12125412
console.log(valorIp);
// NUNCA PODE SER ALTERADA APÓS SER DECLARADA 

// hoisting 





// visibilidade
console.log('---------------------------------------------------------------------------------------------')
// {
//     console.log('Isso é um bloco!');
//     let idade = 35;
//     const real = 50
// }  

// {
//     var x = "teste de escopo"
// }
// console.log(x);
   
// console.log(idade);
// console.log(real);

// undefined ( indefinido, não consta nada nesta variável, não foi definida.)
// pode usar a variável com aspas simples ou duplas
// function (parâmetro) { instruções - tarefas específicas} - bloco
function executar(){
    
    console.log("Dentro da função!!");
    let numero = 60;
    console.log(numero);
}

executar();