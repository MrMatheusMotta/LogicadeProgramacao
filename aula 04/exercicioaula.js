// EXERCÍCIO DE SALA DE AULA 


//EXERCÍCIO 01 - Desenvolver um programa que pergunte ao usuário o seu nome completo e seu sexo.
// Em seguida, o programa deve apresentar os dados anteriormente informados.


function coletarDados() {
    let nome = prompt("Digite seu nome completo :")
    let sexo = prompt("Qual seu sexo ? ")

    document.writeln(`Olá, senhor ${nome}! O senhor é ${sexo} `)

}

// EXERCÍCIO 02 - Elaborar um programa que pergunte quatro valores inteiros e apresente 2 resultados:
// a. Resultados de suas adições
// b. Resultado de suas multiplicações
// c. Fazer um programa que pergunte um valor em Dólares e apresente o 
// equivalente em Reais. Considere U$1,00 = R$5,70


function calcular() {

    let valoresACalcular = [];

    for (let i = 1; i <= 4; i++) {

        let valores = parseInt(prompt(`Valor ${i}`));
        valoresACalcular.push(valores)
    }


    let resultadoSoma = valoresACalcular.reduce((acc, val) => acc + val, 0);
    let resultadoMultiplicacao = valoresACalcular.reduce((acc, val) => acc * val, 1);

    alert(`A soma dos números digitados é: ${resultadoSoma}`);
    alert(`A multiplicação dos números digitados é: ${resultadoMultiplicacao}`);



}


// Perfeito! Bora entender reduce() com muita clareza.

// ✅ O que é reduce()?
// O reduce() é um método de arrays que serve para reduzir todos os elementos do array a um único valor — por exemplo, somar, multiplicar, encontrar o maior ou menor valor, etc.

// ✅ Como funciona?
// javascript
// Copiar
// Editar
// array.reduce((acumulador, valorAtual) => {
//     return acumulador + valorAtual;
// }, valorInicial);
// acumulador → o valor acumulado das operações.

// valorAtual → cada item do array sendo processado.

// valorInicial → com o que o acumulador começa.

// ✅ Exemplo prático: soma
// javascript
// Copiar
// Editar
// let numeros = [10, 20, 30, 40];

// let soma = numeros.reduce((acumulador, valorAtual) => {
//     return acumulador + valorAtual;
// }, 0);  // começamos com 0 para somar

// console.log(soma);  // Resultado: 100
// ✅ Exemplo prático: multiplicação
// javascript
// Copiar
// Editar
// let numeros = [2, 3, 4];

// let multiplicacao = numeros.reduce((acumulador, valorAtual) => {
//     return acumulador * valorAtual;
// }, 1);  // começamos com 1 para multiplicar

// console.log(multiplicacao);  // Resultado: 24
// ✅ Por que usar reduce()?
// ✔️ Código mais limpo e funcional.
// ✔️ Evita variáveis extras e loops manuais.
// ✔️ Ideal para operações acumulativas.

// ✅ No seu caso:
// Para soma:

// javascript
// Copiar
// Editar
// let resultadoSoma = valoresACalcular.reduce((acc, val) => acc + val, 0);
// Para multiplicação:

// javascript
// Copiar
// Editar
// let resultadoMultiplicacao = valoresACalcular.reduce((acc, val) => acc * val, 1);
// ✅ Resumo em uma frase:
// O reduce() transforma um array em um único valor, acumulando os resultados de uma operação.

// ✅ Linha 1:
// javascript
// Copiar
// Editar
// let resultadoSoma = valoresACalcular.reduce((acc, val) => acc + val, 0);
// ➡️ O que está acontecendo aqui?
// valoresACalcular → é o array que você criou com os 4 números que o usuário digitou.
// Exemplo: [2, 4, 6, 8]

// .reduce((acc, val) => acc + val, 0) → estamos chamando o método reduce() nesse array.

// (acc, val) => acc + val → é uma função de callback:

// acc → acumulador → vai acumulando a soma.

// val → valor atual do array que está sendo processado.

// 0 → é o valor inicial do acumulador acc.

// ➡️ Como funciona passo a passo?
// Suponha: valoresACalcular = [2, 4, 6, 8]

// 1ª iteração:

// acc = 0 (valor inicial)

// val = 2

// acc + val = 0 + 2 = 2

// 2ª iteração:

// acc = 2

// val = 4

// acc + val = 2 + 4 = 6

// 3ª iteração:

// acc = 6

// val = 6

// acc + val = 6 + 6 = 12

// 4ª iteração:

// acc = 12

// val = 8

// acc + val = 12 + 8 = 20

// ✅ Resultado final → resultadoSoma = 20

// ✅ Linha 2:
// javascript
// Copiar
// Editar
// let resultadoMultiplicacao = valoresACalcular.reduce((acc, val) => acc * val, 1);
// ➡️ O que está acontecendo?
// Mesma lógica, mas agora estamos multiplicando.

// O valor inicial do acumulador é 1 (não pode ser 0, senão tudo dá zero na multiplicação).

// A função (acc, val) => acc * val → multiplica o acumulador pelo valor atual.

// ➡️ Como funciona passo a passo?
// Com valoresACalcular = [2, 4, 6, 8]

// 1ª iteração:

// acc = 1 (valor inicial)

// val = 2

// acc * val = 1 * 2 = 2

// 2ª iteração:

// acc = 2

// val = 4

// acc * val = 2 * 4 = 8

// 3ª iteração:

// acc = 8

// val = 6

// acc * val = 8 * 6 = 48

// 4ª iteração:

// acc = 48

// val = 8

// acc * val = 48 * 8 = 384

// ✅ Resultado final → resultadoMultiplicacao = 384

// ✅ Resumo das duas linhas:
// Linha	O que faz?	Valor inicial	Operação
// resultadoSoma	Soma os 4 valores	0	acc + val
// resultadoMultiplicacao	Multiplica os 4 valores	1	acc * val

// DICA:

// Sempre que for fazer soma → começa com 0.

// Sempre que for fazer multiplicação → começa com 1.

// Perfeito! Agora vou te mostrar como fazer a mesma coisa, mas usando o laço for ao invés de reduce().

// ✅ Usando for para somar e multiplicar:
// javascript
// Copiar
// Editar
// function calcular() {
//     let valoresACalcular = [];

//     for (let i = 1; i <= 4; i++) {
//         let valor = parseInt(prompt(`Digite o valor inteiro ${i}:`));
//         valoresACalcular.push(valor);
//     }

//     // Variáveis para acumular os resultados
//     let resultadoSoma = 0;
//     let resultadoMultiplicacao = 1;

//     // Laço for para percorrer o array
//     for (let i = 0; i < valoresACalcular.length; i++) {
//         resultadoSoma += valoresACalcular[i];               // soma
//         resultadoMultiplicacao *= valoresACalcular[i];      // multiplicação
//     }

//     alert(`A soma dos números digitados é: ${resultadoSoma}`);
//     alert(`A multiplicação dos números digitados é: ${resultadoMultiplicacao}`);

//     let valorDolar = parseFloat(prompt("Digite um valor em dólares:"));
//     let valorReal = valorDolar * 5.70;

//     alert(`O valor em reais é: R$${valorReal.toFixed(2)}`);
// }

// calcular();
// ✅ Explicação passo a passo:
// ➡️ 1. Criamos duas variáveis:
// resultadoSoma = 0 → para acumular a soma.

// resultadoMultiplicacao = 1 → para acumular a multiplicação.

// ➡️ 2. Usamos for:
// javascript
// Copiar
// Editar
// for (let i = 0; i < valoresACalcular.length; i++) {
//     resultadoSoma += valoresACalcular[i];           
//     resultadoMultiplicacao *= valoresACalcular[i];  
// }
// valoresACalcular[i] → pega cada número do array.

// += → acumula a soma.

// *= → acumula a multiplicação.

// ✅ Diferença entre for e reduce:
// for	reduce()
// Mais manual	Mais automático
// Precisa criar variáveis antes	Não precisa, já está na estrutura
// Mais tradicional	Mais moderno e funcional

// ✅ Quando usar qual?
// ✔️ for: quando quiser mais controle ou está começando.
// ✔️ reduce(): quando quer escrever menos código e de forma mais funcional.



// c. Fazer um programa que pergunte um valor em Dólares e apresente o 
// equivalente em Reais. Considere U$1,00 = R$5,70

function conversorDeMoeda() {

    let dolares = parseFloat(prompt("VALOR EM US$ :"));
    let conversor = (dolares * 5.7);
    alert(`US$ ${dolares} dólares convertidos para reais é de R$${conversor}`);
}

// 3. Fazer um programa que pergunte um número inteiro e apresente o seu antecessor e 
// seu sucessor.

function antecessorSucessor() {
    let numInt = parseInt(prompt("Digite um número inteiro: "))
    let antecessor = numInt - 1;
    let sucessor = numInt + 1;

    document.writeln(`O antecessor de ${numInt} é  ${antecessor} e seu sucessor é ${sucessor}.`)
}

// 4. Fazer um programa que pergunte o salário de um funcionário e apresente este salário 
// com um aumento de 15%.


function aumentoSalario() {
    let salario = parseFloat(prompt("Informe seu salário atual : "));
    let novoSalario = salario + (15 / 100 * salario);
    document.writeln(`O salário atualizado com aumento de 15% é de R$ ${novoSalario.toFixed(4)},00`)
}

// 5. Fazer um programa que pergunte uma temperatura ao usuário, em graus Fahrenheit, e 
// apresente esta temperatura convertida em graus Celsius. A fórmula da conversão é c = 
// (f – 32) x 5 / 9 , onde c é a temperatura em graus Celsius e f em Fahrenheit


function fahrenheitParaCelcius() {
    let temperatura = parseFloat(prompt("Temperatura em Fahrenheit :"));
    let fahrenheitParaCelcius = (temperatura - 32) * 5 / 9;
    document.writeln(`temperatura está : ${fahrenheitParaCelcius.toFixed(2)}ºC`);
}

// 6. Fazer um algoritmo que pergunte 3 números e apresente a média aritmética entre 
// estes 3 números.

function mediaAritimetica() {

    let acumulador = 0

    for (let i = 1; i <= 4; i++) {
        let numeros = parseFloat(prompt(`Informe o ${i}º número`));
        acumulador += numeros
    }

    let media = acumulador / 4;

    document.writeln(`A média é = ${media}`)
}

// 7. Fazer um programa que calcule e apresente a quantidade de litros que um automóvel gastará em uma viagem. 
// O programa deve coletar as seguintes informações: Distância a percorrer na viagem, em quilômetros; qual é o
// valor do consumo médio do automóvel, em quilômetros por litro.


function kmLitros(){
    let distancia = parseFloat(prompt("Qual a distãncia a ser percorrida em KM?"));
    let consumoMedioVeiculo = parseFloat(prompt("Qual a média de consumo do seu automível ?"));

    let gastoCombutivel = distancia / consumoMedioVeiculo;

    document.writeln(`Você gastará ${gastoCombutivel}L nesta viagem!`)

}

// 8. Fazer um algoritmo que pergunte 1 número e apresente:
// a. O próprio número
// b. O quadrado deste número
// c. A raiz quadrada deste número

function calculosNum(){

    let num = parseInt(prompt("Digite um número!"));
    let quadrado = Math.pow(num,2);
    let raiz = Math.sqrt(num);

    document.writeln(`O número digitado foi ${num} <br> ${num}² = ${quadrado} <br> A raiz quadrada de ${num} é ${raiz}`)

}

// 9. Fazer um algoritmo que efetue o cálculo do valor de uma prestação em atraso, 
// utilizando a fórmula prestação = valor + (valor x (taxa : 100) x tempo em dias).

function jurosPrestacao(){

    let valorPrestacao = parseFloat(prompt("Digite o valor da prestação em atraso: "));
    let taxaJuros = parseFloat(prompt("Digite a taxa de juros: "));
    let diasAtraso = parseInt(prompt("Digite os dias de atraso: "))
    let calculoJuros = valorPrestacao + (valorPrestacao *(taxaJuros/100)*diasAtraso)

    document.writeln(`De acordo com as informações, o valor corrigido do seu débito é de R$ ${calculoJuros.toFixed(2)}`)
}


