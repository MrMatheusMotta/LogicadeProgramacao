// const frase = "JavaScript é incrível";
// const palavras = frase.split(" ")

// console.log(palavras)

// const nome = "ana,Bruno,Carlos,André"
// const lista = nome.split(",")
// console.log(lista)

// const letra = "javascript"
// const p = letra.split("")
// console.log(p)



// ✅ O que é split()?
// O método split() divide uma string em várias partes, usando um separador, e retorna um array com as partes divididas.

// ✅ Sintaxe
// javascript
// Copiar
// Editar
// string.split(separador, limite)
// Parâmetro	Descrição
// separador	Define onde a string será cortada (pode ser caractere, palavra, ou expressão regular).
// limite	Opcional. Define o número máximo de divisões.

// ✅ Exemplos práticos
// 1. Dividir uma string por espaço
// javascript
// Copiar
// Editar
// let frase = "Olá mundo JavaScript";
// let palavras = frase.split(" ");

// console.log(palavras);  // ['Olá', 'mundo', 'JavaScript']
// 2. Dividir uma string por vírgula
// javascript
// Copiar
// Editar
// let lista = "maçã,banana,laranja";
// let frutas = lista.split(",");

// console.log(frutas);  // ['maçã', 'banana', 'laranja']
// 3. Dividir em cada caractere
// javascript
// Copiar
// Editar
// let palavra = "ABCD";
// let letras = palavra.split("");

// console.log(letras);  // ['A', 'B', 'C', 'D']
// 4. Usando o limite
// javascript
// Copiar
// Editar
// let texto = "um dois três quatro";
// let partes = texto.split(" ", 2);

// console.log(partes);  // ['um', 'dois']
// → Só pegou as duas primeiras partes.

// ✅ O que acontece se não passar um separador?
// javascript
// Copiar
// Editar
// let nome = "Ana Clara";
// let resultado = nome.split();

// console.log(resultado);  // ['Ana Clara']
// → Retorna a string inteira dentro de um array.

// ✅ Quando usar split()?
// Para quebrar uma string em pedaços menores.

// Para converter uma string em array para processamento.

// Para analisar dados com separadores (como CSV: dados.split(",")).




// const texto = " Aprendizado constante!";
// let contador = 0;

// console.log(texto.includes("constante!")) // includes verifica se um determinado elemento existe dentro de um array
                                          // ou se um texto existe dentro de uma string
                                          // Ele retorna um valor booleano : 
                                          // true -> se encontrou
                                          // false -> se não encontrou



//                                           ✅ O que é includes()?
// O método includes() verifica se um determinado elemento existe dentro de um array ou se um texto existe dentro de uma string.

// Ele retorna um valor booleano:
// ✔️ true → se encontrou
// ❌ false → se não encontrou

// ✅ Sintaxe
// Para arrays:
// javascript
// Copiar
// Editar
// array.includes(elemento, aPartirDe)
// Parâmetro	Descrição
// elemento	O elemento que deseja procurar.
// aPartirDe	Opcional. Posição inicial para começar a busca.

// Para strings:
// javascript
// Copiar
// Editar
// string.includes(substring, aPartirDe)
// Parâmetro	Descrição
// substring	O texto que deseja procurar.
// aPartirDe	Opcional. Índice de onde iniciar a busca.

// ✅ Exemplos práticos
// 1. Verificar se um array contém um elemento
// javascript
// Copiar
// Editar
// let frutas = ['maçã', 'banana', 'laranja'];

// console.log(frutas.includes('banana'));  // true
// console.log(frutas.includes('uva'));     // false
// 2. Verificar se uma string contém um texto
// javascript
// Copiar
// Editar
// let frase = "Eu adoro JavaScript!";

// console.log(frase.includes("adoro"));      // true
// console.log(frase.includes("Python"));     // false
// 3. Usando o parâmetro aPartirDe
// javascript
// Copiar
// Editar
// let numeros = [1, 2, 3, 4, 5];

// console.log(numeros.includes(3, 3));  // false → começa a partir do índice 3
// console.log(numeros.includes(4, 3));  // true → começa a partir do índice 3
// ✅ Quando usar includes()?
// Para verificar rapidamente se um elemento existe em um array.

// Para checar se uma string contém uma palavra ou caractere.

// Muito usado em condições (if).

// ✅ Exemplo com if
// javascript
// Copiar
// Editar
// let permissao = ['admin', 'editor'];
// let usuario = 'editor';

// if (permissao.includes(usuario)) {
//   console.log("Acesso permitido.");
// } else {
//   console.log("Acesso negado.");
// }





