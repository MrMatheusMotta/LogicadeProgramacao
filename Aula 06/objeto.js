

// Objetos 

let pessoas = {
    nome: "Marcia",
    idade: 20,
    profissão: "Dev"
}


for(let x in pessoas){

    console.log(x + " : " + pessoas[x])

}

// -----------------------------------------------------------------------------------------------------------


// ✅ O que é for...in?
// O for...in é uma estrutura de repetição (laço de repetição) do JavaScript.

// Ele serve para percorrer todas as chaves (ou propriedades) de um objeto.

// ✅ Como funciona?
// Sintaxe:

// javascript
// Copiar
// Editar
// for (let chave in objeto) {
//   // código que usa a chave ou valor
// }
// chave → é uma variável que, a cada repetição, recebe o nome da chave do objeto.

// objeto → é o objeto que queremos percorrer.

// ✅ Exemplo básico:
// javascript
// Copiar
// Editar
// let pessoa = {
//   nome: "João",
//   idade: 30,
//   cidade: "Rio de Janeiro"
// };

// for (let chave in pessoa) {
//   console.log(chave);            // Mostra a chave (nome, idade, cidade)
//   console.log(pessoa[chave]);    // Mostra o valor ("João", 30, "Rio de Janeiro")
// }
// O que vai aparecer no console:

// nginx
// Copiar
// Editar
// nome
// João
// idade
// 30
// cidade
// Rio de Janeiro
// ✅ Passo a passo:
// O for...in pega a primeira chave → nome.

// Mostra o nome da chave → "nome".

// Mostra o valor → pessoa["nome"] → "João".

// Depois vai para a próxima chave → idade → e repete.

// Continua até acabar todas as chaves.

// ✅ Quando usar for...in?
// ✅ Quando quiser percorrer todas as chaves de um objeto.
// ✅ Quando quiser mostrar ou modificar os valores.

// ❌ Cuidado!
// O for...in não é recomendado para arrays se você quer percorrer os índices.
// Para arrays, é melhor usar for, for...of ou forEach.

// Exemplo do que não fazer:

// javascript
// Copiar
// Editar
// let numeros = [10, 20, 30];

// for (let i in numeros) {
//   console.log(i);         // Mostra os índices: 0, 1, 2
//   console.log(numeros[i]); // Mostra os valores: 10, 20, 30
// }
// Funciona, mas é melhor usar for...of para arrays!

// ✅ Resumo:
// for...in	Serve para...
// Objetos	Percorrer as chaves
// Arrays	Não recomendado!

// -----------------------------------------------------------------------------------------------------------

// array

// let pessoas2 = ["Marcia", 20, "Dev"]

// console.log("Idade: " + pessoas2[1])



// ---------------------------------------------------------------------------------------------------------------------------
// ✅ O que é um array?
// Um array é uma lista de valores. Imagine como uma caixa que guarda várias coisas, organizadas em uma ordem. Cada valor dentro de um array é chamado de elemento.

// Exemplo de array simples:

// javascript
// Copiar
// Editar
// let frutas = ["maçã", "banana", "laranja"];
// Aqui temos um array chamado frutas com 3 elementos: "maçã", "banana" e "laranja".

// ✅ O que é um objeto?
// Um objeto é uma estrutura de dados que guarda várias informações, organizadas em pares: chave e valor.

// Exemplo de objeto simples:

// javascript
// Copiar
// Editar
// let pessoa = {
//   nome: "Maria",
//   idade: 25,
//   cidade: "São Paulo"
// };
// Aqui temos um objeto chamado pessoa que guarda três informações (ou propriedades): nome, idade e cidade.

// ✅ O que é um objeto dentro de um array?
// É quando, dentro da lista (array), colocamos objetos como elementos. Cada posição da lista guarda um objeto com suas chaves e valores.

// Exemplo:

// javascript
// Copiar
// Editar
// let pessoas = [
//   { nome: "Ana", idade: 30 },
//   { nome: "Carlos", idade: 25 },
//   { nome: "Beatriz", idade: 28 }
// ];
// ➡️ Aqui pessoas é um array com 3 elementos.
// ➡️ Cada elemento é um objeto que representa uma pessoa com nome e idade.

// ✅ Como acessar as informações?
// Para acessar o primeiro objeto:

// javascript
// Copiar
// Editar
// console.log(pessoas[0]); 
// // { nome: "Ana", idade: 30 }
// Para acessar a idade da segunda pessoa:

// javascript
// Copiar
// Editar
// console.log(pessoas[1].idade); 
// // 25
// ✅ Por que usamos objetos em arrays?
// Porque às vezes precisamos de uma lista com coisas mais complexas.
// Por exemplo, uma lista de usuários, onde cada usuário tem nome, email, idade, etc.

// ✅ Resumindo:
// Conceito	O que é?
// Array	Lista de elementos
// Objeto	Estrutura com chave e valor
// Objeto dentro de Array	Lista onde cada item é um objeto