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