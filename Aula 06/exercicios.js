const alunos = [
    {nome:"José", nota: 7.5},
    {nome:"Celso", nota: 9.2},
    {nome:"Bruno", nota: 6.8},
    {nome:"Daniela", nota: 5.5},
    {nome:"Eduardo", nota: 2.8},
];
// 1 - ordenar por nota (crescente)

const porNota = [...alunos].sort((a, b) => a.nota - b.nota)
console.log(" Por nota Crescente : " )
console.log(porNota)

// 2 - ordenar por nome (alfabético)

const porNome = [...alunos].sort((a, b) => a.nome.localeCompare(b.nome))
console.log(" Por ordem alfabética : " )
console.log(porNome)


// 3 - Maior nota

const maiorNota = porNota[porNota.length -1]
console.log("Maior nota", maiorNota)


// 4 - Menor nota

const menorNota = porNota[0];
console.log("Menor nota ", menorNota )


// let notas = [ 10, 4 , 5 , 6 , 8]
// let lerUltimo = notas[notas.length -1]
// console.log(lerUltimo)


//  A vírgula , → separa valores ou expressões
// Função principal:
// Separar elementos em uma lista ou argumentos.
// Separar parâmetros de funções.
// Separar propriedades de objetos.
// Em expressões, avalia várias coisas mas só retorna o último valor.


// 2. O sinal de adição + → soma ou concatena
// Função principal:
// Somar números.
// Concatenar (juntar) strings.