// Teste 
// Fatorial

// n!
// 5! = 5 * 4 * 3 * 2 * 1 = 120

function fatorial (n){
    // caso de base
    if(n === 0){
        return 1;
    }else {
        return n * fatorial(n - 1) // Chamada recursiva!!!
    }

}

console.log(fatorial(5))


// ✅ O que é fatorial?
// O fatorial de um número n (representado por n!) é o produto de todos os números inteiros positivos de n até 1.

// Exemplo:

// Copiar
// Editar
// 5! = 5 × 4 × 3 × 2 × 1 = 120
// ➡️ Por definição, o fatorial de 0 é sempre 1 → 0! = 1.

// ✅ Linha a linha do código:
// javascript
// Copiar
// Editar
// // Teste 
// // Fatorial

// // n!
// // 5! = 5 * 4 * 3 * 2 * 1 = 120
// ➡️ Comentários explicando que o código faz um teste para calcular o fatorial.
// Também mostra o exemplo clássico: 5! = 120.

// javascript
// Copiar
// Editar
// function fatorial (n){
// ➡️ Declara uma função chamada fatorial.
// Recebe um parâmetro n, que é o número que queremos calcular o fatorial.

// javascript
// Copiar
// Editar
//     // caso de base
// ➡️ Comentário: vai definir o caso base, ou seja, a condição para parar a recursão.

// javascript
// Copiar
// Editar
//     if(n === 0){
// ➡️ Verifica se n é igual a 0.
// ➡️ Esse é o caso base: quando chega em 0, sabemos que 0! é igual a 1.

// javascript
// Copiar
// Editar
//         return 1;
// ➡️ Se n for 0, a função retorna 1 imediatamente, encerrando essa chamada.
// ➡️ Isso impede que a função continue se chamando infinitamente.

// javascript
// Copiar
// Editar
//     }else {
// ➡️ Se n não for 0, a função continua a execução aqui.

// javascript
// Copiar
// Editar
//         return n * fatorial(n - 1) // Chamada recursiva!!!
// ➡️ Aqui acontece a chamada recursiva:

// A função se chama novamente, mas agora com n - 1.

// O resultado é n vezes o fatorial de n - 1.

// ➡️ Por exemplo, se n = 5, será:
// 5 * fatorial(4) → que será 4 * fatorial(3) → e assim por diante até fatorial(0).

// ⚠️ Cada chamada espera o resultado da próxima para fazer a multiplicação.

// javascript
// Copiar
// Editar
//     }
// ➡️ Fim do bloco else.

// javascript
// Copiar
// Editar
// }
// ➡️ Fim da função fatorial.

// javascript
// Copiar
// Editar
// console.log(fatorial(5))
// ➡️ Aqui você está chamando a função fatorial(5) e imprimindo o resultado no console.

// ✅ O que acontece passo a passo?
// fatorial(5) → 5 * fatorial(4)

// fatorial(4) → 4 * fatorial(3)

// fatorial(3) → 3 * fatorial(2)

// fatorial(2) → 2 * fatorial(1)

// fatorial(1) → 1 * fatorial(0)

// fatorial(0) → caso base → retorna 1

// Agora as chamadas começam a voltar:

// fatorial(1) → 1 * 1 = 1

// fatorial(2) → 2 * 1 = 2

// fatorial(3) → 3 * 2 = 6

// fatorial(4) → 4 * 6 = 24

// fatorial(5) → 5 * 24 = 120

// ✅ Por isso, o resultado final é:

// Copiar
// Editar
// 120
// ✅ Resumo sobre a função recursiva:
// Elemento	Explicação
// Parâmetro	Número n para calcular o fatorial.
// Caso base	Quando n é 0, retorna 1.
// Chamada recursiva	n * fatorial(n - 1)
// Finalização	Quando chega em 0, retorna e resolve todas as multiplicações.

// ✅ Por que usar recursão aqui?
// ➡️ Porque o cálculo de fatorial é um problema que se repete de maneira natural:
// n! = n × (n - 1)!