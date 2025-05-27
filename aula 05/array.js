// Splice

// let frutas = ["Maçã", "Banana", "Laranja", "Mamão"]

// // frutas.splice(indice, itens_remover, inserir, inserir);
// frutas.splice(2, 1) // ou seja, o primeiro parametro indica onde o indice vai remover, e o segundo parametro
//                     // indica quantos indices remove
// //  itens a partir do índice 1
// console.log(frutas)

// // console.log(frutas.length)

// // for(let i = 0 ; i < frutas.length ; i++){
// //     console.log(frutas[i])
// }

// let numeros = [1, 2, 5]
// // // numeros.splice(indice, itens_remover, inserir, inserir);
// numeros.splice(2, 0, 3, 4)
// console.log(numeros)



// O método splice() é uma função muito poderosa dos arrays em JavaScript, usada para adicionar, remover ou substituir elementos dentro de um array.

// ✅ Sintaxe
// javascript
// Copiar
// Editar
// array.splice(inicio, quantidade, item1, item2, ..., itemN)
// Parâmetro	Descrição
// inicio	Índice onde começar a alterar o array
// quantidade	Quantos elementos remover a partir do índice inicio
// item1, ..., N	Elementos a adicionar no array a partir do índice inicio (opcional)

// ✅ Exemplos práticos
// 1. Remover elementos
// javascript
// Copiar
// Editar
// let frutas = ['maçã', 'banana', 'laranja', 'uva'];
// frutas.splice(1, 2);  // A partir do índice 1, remove 2 elementos

// console.log(frutas);  // ['maçã', 'uva']
// → Removeu "banana" e "laranja".

// 2. Adicionar elementos
// javascript
// Copiar
// Editar
// let numeros = [1, 2, 5];
// numeros.splice(2, 0, 3, 4);  // No índice 2, remove 0 e adiciona 3 e 4

// console.log(numeros);  // [1, 2, 3, 4, 5]
// → Inseriu "3" e "4" na posição antes do 5.

// 3. Substituir elementos
// javascript
// Copiar
// Editar
// let cores = ['vermelho', 'verde', 'azul'];
// cores.splice(1, 1, 'amarelo');  // No índice 1, remove 1 e adiciona 'amarelo'

// console.log(cores);  // ['vermelho', 'amarelo', 'azul']
// → Substituiu "verde" por "amarelo".

// ✅ O que o splice() retorna?
// Ele sempre retorna um array com os elementos removidos.

// javascript
// Copiar
// Editar
// let nomes = ['Ana', 'Bia', 'Carlos'];
// let removidos = nomes.splice(1, 2);

// console.log(removidos);  // ['Bia', 'Carlos']
// console.log(nomes);      // ['Ana']
// ✅ Quando usar splice()?
// Quando quiser remover elementos específicos do array.

// Quando precisar inserir elementos em uma posição específica.

// Quando quiser substituir elementos.


// split - elemento de string


// const frase = "JavaScript é incrível";
// const palavras = frase.length;

// console.log(palavras)

// -------------------------------------------------------------------------------------------------

