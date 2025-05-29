// fibonacci

// Cada número é a soma dos dois anteriores.

// 0, 1, 1, 2, 3, 5, 8, 13 ...


function fibonnaci(n){
    // caso de base
    if(n === 0){ //f(0) = 0 e f(1) = 1
        return 0
    }
    if(n === 1){
        return 1
    }
    
    // passo recursivo f(n) = f(n-1) + f(n-2)
    return fibonnaci(n-1) + fibonnaci(n-2)

    
}

console.log(fibonnaci(6))



// ✅ O que é a sequência de Fibonacci?
// A sequência de Fibonacci é uma sequência de números onde:

// Cada número é a soma dos dois números anteriores.

// Começa com 0 e 1.

// Exemplo:

// Copiar
// Editar
// 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
// ➡️ Ou seja:
// f(0) = 0
// f(1) = 1
// f(2) = 1 → 0 + 1
// f(3) = 2 → 1 + 1
// f(4) = 3 → 1 + 2
// f(5) = 5 → 2 + 3
// f(6) = 8 → 3 + 5

// ✅ Agora, linha a linha do código:
// javascript
// Copiar
// Editar
// // fibonacci
// ➡️ Comentário: explicando que o código calcula a sequência de Fibonacci.

// javascript
// Copiar
// Editar
// // Cada número é a soma dos dois anteriores.
// ➡️ Lembrete da regra principal da sequência.

// javascript
// Copiar
// Editar
// // 0, 1, 1, 2, 3, 5, 8, 13 ...
// ➡️ Mostrando os primeiros números da sequência.

// javascript
// Copiar
// Editar
// function fibonnaci(n){
// ➡️ Define a função chamada fibonnaci.
// Recebe um parâmetro n, que é a posição da sequência que queremos calcular.

// javascript
// Copiar
// Editar
//     // caso de base
// ➡️ Comentário: agora vai definir o caso base da recursão.

// javascript
// Copiar
// Editar
//     if(n === 0){ //f(0) = 0 e f(1) = 1
//         return 0
//     }
// ➡️ Se n for 0, retorna 0.
// Por quê? → porque por definição f(0) = 0.

// javascript
// Copiar
// Editar
//     if(n === 1){
//         return 1
//     }
// ➡️ Se n for 1, retorna 1.
// Por quê? → porque por definição f(1) = 1.

// ✅ Esses dois são os casos base — fundamentais para parar a recursão.

// javascript
// Copiar
// Editar
//     // passo recursivo f(n) = f(n-1) + f(n-2)
// ➡️ Comentário: agora vem a parte recursiva — a função vai se chamar novamente.

// javascript
// Copiar
// Editar
//     return fibonnaci(n-1) + fibonnaci(n-2)
// ➡️ O valor de f(n) é a soma de:

// fibonnaci(n-1) → termo anterior

// fibonnaci(n-2) → termo dois antes

// ➡️ A função se chama duas vezes em cada execução até chegar ao caso base.

// javascript
// Copiar
// Editar
// }
// ➡️ Fim da função fibonnaci.

// javascript
// Copiar
// Editar
// console.log(fibonnaci(6))
// ➡️ Chama a função pedindo o 6º elemento da sequência de Fibonacci.
// ➡️ Vai imprimir o resultado no console.

// ✅ Como funciona passo a passo?
// fibonnaci(6) → precisa saber fibonnaci(5) e fibonnaci(4)

// fibonnaci(5) → precisa de fibonnaci(4) e fibonnaci(3)

// e assim por diante...

// Até chegar nos casos base:

// fibonnaci(1) → 1

// fibonnaci(0) → 0

// Depois as chamadas começam a voltar, somando os valores:

// fibonnaci(2) → fibonnaci(1) + fibonnaci(0) → 1 + 0 = 1

// fibonnaci(3) → fibonnaci(2) + fibonnaci(1) → 1 + 1 = 2

// fibonnaci(4) → fibonnaci(3) + fibonnaci(2) → 2 + 1 = 3

// fibonnaci(5) → fibonnaci(4) + fibonnaci(3) → 3 + 2 = 5

// fibonnaci(6) → fibonnaci(5) + fibonnaci(4) → 5 + 3 = 8

// ✅ Resultado final:

// Copiar
// Editar
// 8
// ✅ Resumo do funcionamento:
// Elemento	Explicação
// Casos base	f(0) = 0 e f(1) = 1
// Chamada recursiva	f(n) = f(n-1) + f(n-2)
// Exemplo	f(6) = 5 + 3 = 8
// Ponto importante	Cada chamada gera duas novas chamadas → pode ficar lento para valores grandes!

// ✅ Curiosidade:
// ➡️ Esse tipo de recursão é chamado de "recursão exponencial", porque o número de chamadas cresce rapidamente.

// ➡️ Para valores muito grandes de n, é melhor usar "programação dinâmica" ou "memorização" para evitar repetição desnecessária.