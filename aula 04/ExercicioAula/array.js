// arrays

let frutas = ["maçã", "banana", "laranja", "mamão"]
console.log(frutas[2]);

for(let i = 0; i < frutas.length ; i++) // length é uma propriedade usada para saber o comprimento ou tamanho de certas estruturas, como:
{                                       // Arrays (quantos elementos tem) Strings (quantos caracteres tem)
    console.log(`fruta ${i + 1}: ${frutas[i]}`);
}


// Como usar length na prática:
// Percorrer um array:
// for(let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }
// O length serve para saber até onde o for deve ir.

// Validar se a string está vazia:
// let nome = "";
// if(nome.length === 0) {
//     console.log("O nome está vazio.");
// }




// -- - --- Funções do array
// - push - Insere valor  no final do array
// - pop - Remover último valor do array
// -- Adicionar valor arrai[x] = 50;
// - shift - Remover o primeiro valor do array
// - map - Percorrer o array e criar uma lista duplicada
// - length - contar elementos do array
// - splice - Pode apagar um elemento a partir do índice, e inserir elementos
// - split - tratara a string - desmembrar, separar, etc..