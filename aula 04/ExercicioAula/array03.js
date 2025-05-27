



// let valor2 = [20, 10, 32, 41, 78, 15, 14, 74, 100];
// let valorarray = []

// // inserir valor no final do array

// valor2.push(60); // push é uma função que inclui um valor no final do array!
// valorarray.push(120);
// valorarray.push(30);
// // valorarray.pop(); //remove o ultimo valor da lista
// valorarray.shift(); // remove o primeiro valor da lista
// console.log("Valor do array: " + valorarray[0])
// console.log("Valor do array: " + valorarray[1])
// // valorarray[1] = 89;
// // console.log("Valor trocado:  " + valorarray[1])
// // console.log(valor2[9]);


// let valor2 = [20, 10, 32, 41, 78, 15, 14, 74, 100];

// let total = valor2.map( function(valor){
//     return valor * 2;

// } ) 

// console.log("Original", valor2)
// console.log("Valor dobrado", total)

//  // exemplo

//  let numeros2 = [1, 5, 4, 7]

//  let dobrados2 = numeros2.map(valor => valor * 2)

//  let nome = ["Carlos", "João", "Celia"]

//  // toUpperCase - converter os valores string todos para maiúsculo
//  // toLowerCase - converter os valores string todos para minúsculo

//  let nome2 = ["João", "Maria", "José", "Ana", "Pedro"]
//  let nomeMaiúsculo = nome2.map((item) => item.toLowerCase());
//  console.log(nome2);
//  console.log(nomeMaiúsculo);




let merenda = ["FEIJOADA", "Papa", "cuzCUZ", "Canjiquinha", "DOBradINHA"];

let padronizado = merenda.map(todos => todos.toLowerCase());

console.log(merenda);
console.log(padronizado);





// O método .map() é uma função muito importante em JavaScript, utilizada para transformar os elementos de um array, criando um novo array com o mesmo tamanho, mas com elementos modificados de acordo com a função que você passa.

// Estrutura básica:

// const novoArray = arrayOriginal.map(function(elemento, indice, array) {
//   // Retorna o valor transformado
// });
// ou, de forma mais moderna:

// const novoArray = arrayOriginal.map((elemento, indice, array) => {
//   // Retorna o valor transformado
// });
// Como funciona:
// arrayOriginal → O array que você quer transformar.

// elemento → Cada item do array, um por um.

// indice → (Opcional) A posição do item no array.

// array → (Opcional) O array completo.

// Retorno → Um novo array com os elementos modificados.

// Exemplo simples:
// const numeros = [1, 2, 3, 4, 5];

// // Queremos dobrar os valores
// const dobrados = numeros.map(numero => numero * 2);

// console.log(dobrados); 
// // Saída: [2, 4, 6, 8, 10]
// Exemplo com objetos:
// const usuarios = [
//   { nome: 'Ana', idade: 25 },
//   { nome: 'João', idade: 30 },
//   { nome: 'Maria', idade: 28 }
// ];

// // Queremos só os nomes
// const nomes = usuarios.map(usuario => usuario.nome);

// console.log(nomes);
// // Saída: ['Ana', 'João', 'Maria']
// Características importantes:
// .map() não altera o array original.

// Sempre retorna um novo array.

// Ideal quando você quer transformar os dados, mas não quando quer filtrar ou executar efeitos colaterais.

// omparação rápida:
// Método	Para que serve
// map()	Transformar cada elemento, criar novo array
// filter()	Filtrar elementos com base em uma condição
// forEach()	Executar algo para cada elemento, mas não cria novo array