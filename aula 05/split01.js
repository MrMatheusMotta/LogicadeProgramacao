// Crie um programa que leia uma string e mostre o total de vogais existentes.

const texto = "Aprendizado constante!";
let contador = 0;

texto.toLowerCase().split("").forEach(letra => {
    if("aeiou".includes(letra))
        contador++
})

console.log(`À quanditade de vogais: ${contador}`)


// ✅ O que é forEach()?
// forEach() executa uma função callback para cada elemento de um array, na ordem em que aparecem.
// Ele não altera o array original e não retorna um novo array (retorna undefined).

// ✅ Sintaxe
// javascript
// Copiar
// Editar
// array.forEach(function(elemento, indice, array) {
//   // Código a executar
// });
// Parâmetro	Descrição
// elemento	O valor atual do array
// indice	Opcional. O índice do elemento atual
// array	Opcional. O array completo

// ✅ Exemplo básico
// javascript
// Copiar
// Editar
// let frutas = ['maçã', 'banana', 'laranja'];

// frutas.forEach(function(fruta) {
//   console.log(fruta);
// });
// Saída:

// perl
// Copiar
// Editar
// maçã
// banana
// laranja
// ✅ Exemplo com índice
// javascript
// Copiar
// Editar
// let cores = ['vermelho', 'verde', 'azul'];

// cores.forEach(function(cor, indice) {
//   console.log(`${indice}: ${cor}`);
// });
// Saída:

// makefile
// Copiar
// Editar
// 0: vermelho
// 1: verde
// 2: azul
// ✅ Usando função arrow
// javascript
// Copiar
// Editar
// let numeros = [1, 2, 3];

// numeros.forEach((n) => {
//   console.log(n * 2);
// });
// Saída:

// Copiar
// Editar
// 2
// 4
// 6
// ✅ Pontos importantes
// ✅ Executa a função para cada item
// ✅ Não interrompe a execução (não dá para usar break)
// ✅ Retorna sempre undefined
// ✅ Muito útil para ações ou efeitos colaterais (ex.: exibir no console, modificar DOM)

// ❌ Quando não usar?
// Quando quiser produzir um novo array → use map().

// Quando precisar parar no meio → use for ou for...of.

// ✅ Exemplo típico de uso
// javascript
// Copiar
// Editar
// let nomes = ['Ana', 'Carlos', 'Beatriz'];

// nomes.forEach((nome) => {
//   console.log(`Olá, ${nome}!`);
// });
// ✅ Resumindo:
// Método	Ideal para...
// forEach	Fazer algo com cada item (efeito)
// map	Transformar cada item (gera novo array)
// filter	Filtrar alguns itens (gera novo array)



// ✅ O que é forEach()?
// Imagine que você tem uma lista de coisas, por exemplo:

// javascript
// Copiar
// Editar
// let frutas = ['maçã', 'banana', 'laranja'];
// E você quer fazer alguma coisa com cada uma dessas frutas, por exemplo: mostrar no console.

// O forEach() serve exatamente para isso: "para cada item da lista, faça algo".

// ✅ Como funciona o forEach()?
// 👉 Forma geral:
// javascript
// Copiar
// Editar
// lista.forEach((item) => {
//   // O que você quer fazer com cada item
// });
// ✅ Exemplo bem simples:
// javascript
// Copiar
// Editar
// let frutas = ['maçã', 'banana', 'laranja'];

// frutas.forEach((fruta) => {
//   console.log(fruta);
// });
// O que acontece?
// ➡️ Ele pega a primeira fruta → mostra.
// ➡️ Pega a segunda fruta → mostra.
// ➡️ Pega a terceira fruta → mostra.

// Saída:

// perl
// Copiar
// Editar
// maçã
// banana
// laranja
// ✅ Como pensar sobre o forEach()
// Imagine que o forEach() está chamando sua função várias vezes, uma vez para cada item.

// Você não precisa se preocupar com "quantas vezes" ou "quando parar" — o forEach() faz isso automaticamente.

// ✅ Por que usar forEach()?
// ✅ É mais fácil e mais legível do que um for.
// ✅ É ótimo quando você só quer fazer uma ação para cada item.
// ✅ Você não precisa mexer com números de índice, se não quiser.

// ✅ O que não dá pra fazer?
// ❌ Não dá pra parar no meio (como com break).
// ❌ Não dá pra criar um novo array com ele — para isso, use map().

// ✅ Frase para lembrar:
// "forEach = para cada item da lista, faça alguma coisa."


let frase2 = "A programação é legal!!"
function contarespaco(frase2){
    const parte = frase2.split(" ");
    const numeroespaco = parte.length - 1
    return numeroespaco
}

console.log(contarespaco(frase2))