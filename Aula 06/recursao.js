// Contagem regressiva

//  laço 

// for(let i = 10; i >= 0; i--){
//     console.log(i)
// }


// função recursiva 

function contagemRegressiva(n){
    console.log(n)
    // caso base
    if(n === 0){
        return;
    }
    contagemRegressiva(n - 1)
}

contagemRegressiva(5)




// ✅ O que é uma função recursiva?
// Uma função recursiva é uma função que chama a si mesma durante sua execução, até que uma condição de parada (chamada de caso base) seja atingida.

// ➡️ A recursão é muito usada para resolver problemas que podem ser quebrados em subproblemas menores da mesma natureza.
// ➡️ Importante: sem um caso base, a função nunca para e gera um erro de estouro de pilha ("stack overflow").

// ✅ Agora vamos linha a linha dos dois códigos que você enviou!
// 🟦 1º Código: Usando um laço for
// javascript
// Copiar
// Editar
// // Contagem regressiva
// ➡️ Comentário: está indicando o que esse bloco de código faz.

// javascript
// Copiar
// Editar
// // laço
// ➡️ Comentário: vai usar um laço de repetição (loop).

// javascript
// Copiar
// Editar
// // for(let i = 10; i >= 0; i--){
// ➡️ Estrutura do laço:

// let i = 10 → começa com o valor 10.

// i >= 0 → enquanto i for maior ou igual a zero, continua repetindo.

// i-- → a cada repetição, subtrai 1 de i.

// javascript
// Copiar
// Editar
// // console.log(i)
// ➡️ A cada repetição, exibe o valor atual de i no console.
// Vai mostrar: 10, 9, 8, ..., 0.

// ✅ Resumo do laço:
// Começa em 10 e vai até 0, decrementando 1 a cada volta, exibindo os números no console.

// 🟦 2º Código: Usando função recursiva
// javascript
// Copiar
// Editar
// // função recursiva
// ➡️ Comentário: agora será usada a técnica de recursão.

// javascript
// Copiar
// Editar
// function contagemRegressiva(n){
// ➡️ Define uma função chamada contagemRegressiva.
// Recebe um parâmetro n, que será o número inicial da contagem.

// javascript
// Copiar
// Editar
//     console.log(n)
// ➡️ Sempre que a função for chamada, imprime no console o valor atual de n.

// javascript
// Copiar
// Editar
//     // caso base
// ➡️ Comentário: vai definir a condição de parada da função, fundamental em recursão.

// javascript
// Copiar
// Editar
//     if(n === 0){
// ➡️ Verifica: "O valor de n é igual a 0?"
// Se sim, chegou no fim da contagem.

// javascript
// Copiar
// Editar
//         return;
// ➡️ Se n for 0, a função para por aqui, não chama mais a si mesma.
// Esse é o caso base, evita o loop infinito.

// javascript
// Copiar
// Editar
//     }
// ➡️ Fim do bloco if.

// javascript
// Copiar
// Editar
//     contagemRegressiva(n - 1)
// ➡️ Se n não for 0, a função se chama novamente, mas agora com n - 1.
// Ou seja: diminui 1 a cada chamada.
// Exemplo: se começou com 5 → chama 4 → chama 3 → ... → até 0.

// javascript
// Copiar
// Editar
// }
// ➡️ Fim da função contagemRegressiva.

// javascript
// Copiar
// Editar
// contagemRegressiva(5)
// ➡️ Chama a função pela primeira vez, iniciando a contagem de 5 até 0.

// ➡️ O fluxo será assim:

// contagemRegressiva(5) → imprime 5 → chama contagemRegressiva(4)

// contagemRegressiva(4) → imprime 4 → chama contagemRegressiva(3)

// ... e assim por diante...

// contagemRegressiva(0) → imprime 0 → como n === 0, a função para.

// ✅ Resultado no console:

// Copiar
// Editar
// 5  
// 4  
// 3  
// 2  
// 1  
// 0  
// ✅ 📊 Comparação: Laço vs Recursão
// Laço (for)	Função Recursiva
// Mais simples e eficiente para casos assim	Mais elegante, mas usa mais memória (chamadas na pilha)
// Não precisa de caso base	Precisa de um caso base obrigatório
// Executa repetição automaticamente	A repetição ocorre chamando a função a si mesma
// Ideal para tarefas repetitivas simples	Ideal para resolver problemas que se repetem de forma natural, como fatorial, Fibonacci

// ✅ 📌 Resumo:
// Função recursiva: quando a função se chama sozinha até atingir uma condição de parada.

// No seu código: a contagem começa no número e vai até 0, chamando a função repetidamente, diminuindo 1 a cada vez.

