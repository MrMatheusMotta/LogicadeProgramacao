// 10, 41, 41
// 20, 45, 47
// 10, 45, 54

// let X = ["d", "j","q"];
// X[2] // índice 2 seria o "q"


// const matriz = [
//     [10, 41, 41],
//     [20, 45, 47],
//     [10, 45, 54]
// ];

// console.log(matriz[0][0]) // primeiro lê linha, segundo lê a coluna
// console.log(matriz[1][2]) // primeiro lê linha, segundo lê a coluna


// // 1º for percorre a linha
// for(let linha = 0; linha < matriz.length; linha++){   //length vai descobrir e percorrer a linha completa
//     // 2º for percorre a coluna
//     for(let coluna = 0; coluna < matriz.length; coluna++){ //length vai descobrir e percorrer a coluna completa
//         console.log(`Elemento na posição : [${linha}][${coluna}] é ${matriz[linha][coluna]}`)
//     }
// }

const matriz2 = [
    [10, 41, 41, 54, 44],
    [20, 45, 47, 55, 77],
    [10, 45, 54, 65, 90]
];

// console.log(matriz2[0][0]) // primeiro lê linha, segundo lê a coluna
// console.log(matriz2[1][2]) // primeiro lê linha, segundo lê a coluna


// 1º for percorre a linha
for(let linha = 0; linha < matriz2.length; linha++){   //length vai descobrir e percorrer a linha completa
    // 2º for percorre a coluna
    for(let coluna = 0; coluna < matriz2[linha].length; coluna++){ //length vai descobrir e percorrer a coluna completa
                                                                  // nesse caso, como possúi mais colunas que linhas, 
                                                                  // precisa passar o valor [linha] que é a quantidade de 
                                                                  //linhas que ele precisa percorrer antes de iniciar o laço primario
                                                                  //fazendo assim com que todas as colunas sejam lidas
                                                                  // porquê o primeiro valor de matris.length da linha retorna
                                                                  // o valor 3, pelo fato de possuir apenas 3 linhas. no caso, do índice 0 ao 2.
        console.log(`Elemento na posição : [${linha}][${coluna}] é ${matriz2[linha][coluna]}`)
    }
}



const matrizZero = []

for(let i = 0; i < 3; i++){ // linha

    matrizZero[i] = []
    for(let x = 0; x < 3 ; x++){ //coluna
      matrizZero[i][x]  = 0
    }
}
console.log(matrizZero)

// array[indice] = 12

// matrizZero[2][4] = 14








// ✅ Primeiro: O que é uma matriz?
// ➡️ É uma estrutura de dados parecida com uma tabela.
// ➡️ Tem linhas e colunas.
// ➡️ Cada elemento é acessado por dois índices:

// javascript
// Copiar
// Editar
// matriz[linha][coluna]
// Exemplo da matriz dada:

// javascript
// Copiar
// Editar
// const matriz = [
//     [10, 41, 41],  // Linha 0 → Colunas: 0, 1, 2
//     [20, 45, 47],  // Linha 1 → Colunas: 0, 1, 2
//     [10, 45, 54]   // Linha 2 → Colunas: 0, 1, 2
// ];
// ✅ Antes do laço: acessos diretos:
// javascript
// Copiar
// Editar
// console.log(matriz[0][0])
// ➡️ Acessa o elemento da linha 0, coluna 0 → ou seja, o 10.

// javascript
// Copiar
// Editar
// console.log(matriz[1][2])
// ➡️ Acessa o elemento da linha 1, coluna 2 → ou seja, o 47.

// ✅ Agora, o laço completo:
// javascript
// Copiar
// Editar
// for(let linha = 0; linha < matriz.length; linha++){
// ➡️ Esse é o primeiro for:
// ✔️ Cria a variável linha e começa no 0.
// ✔️ matriz.length → significa quantas linhas existem na matriz → nesse caso, 3.
// ✔️ Então, esse laço percorre todas as linhas: 0, 1 e 2.

// javascript
// Copiar
// Editar
//     for(let coluna = 0; coluna < matriz.length; coluna++){
// ➡️ Dentro de cada linha, esse é o segundo for:
// ✔️ Cria a variável coluna e começa no 0.
// ✔️ Também usa matriz.length, que é 3.
// ✔️ Esse laço percorre todas as colunas da linha atual: 0, 1 e 2.

// 🔴 IMPORTANTE:
// Neste código, ele usou matriz.length para a coluna também.
// ➡️ Isso funciona nesse caso porque todas as linhas têm 3 colunas.
// ➡️ Mas o correto, para segurança, seria:

// javascript
// Copiar
// Editar
// matriz[linha].length
// Assim ele verifica o tamanho real da linha atual.

// javascript
// Copiar
// Editar
//         console.log(`Elemento na posição : [${linha}][${coluna}] é ${matriz[linha][coluna]}`)
// ➡️ Dentro do laço:
// ✔️ Exibe o número da linha, o número da coluna e o valor que está na matriz naquela posição.

// ✅ O que acontece passo a passo?
// linha = 0
// → coluna = 0 → imprime: [0][0] é 10
// → coluna = 1 → imprime: [0][1] é 41
// → coluna = 2 → imprime: [0][2] é 41

// linha = 1
// → coluna = 0 → imprime: [1][0] é 20
// → coluna = 1 → imprime: [1][1] é 45
// → coluna = 2 → imprime: [1][2] é 47

// linha = 2
// → coluna = 0 → imprime: [2][0] é 10
// → coluna = 1 → imprime: [2][1] é 45
// → coluna = 2 → imprime: [2][2] é 54

// ✅ Resumo visual do laço:
// Linha	Coluna	Valor
// 0	        0	    10
// 0	        1	    41
// 0	        2   	41
// 1	        0	    20
// 1	        1	    45
// 1	        2   	47
// 2        	0   	10
// 2	        1	    45
// 2	        2   	54

// ✅ Resumo final:
// Elemento	Explicação
// for externo (linha)	percorre todas as linhas
// for interno (coluna)	percorre todas as colunas de cada linha
// console.log	mostra posição e valor
// matriz[linha][coluna]	acessa valor específico na matriz

// ✅ DICA PARA VOCÊ:
// Quando for trabalhar com matriz:

// Sempre pense em linha primeiro, depois coluna.

// Cuidado com o length: pode variar conforme o tamanho de cada linha.

