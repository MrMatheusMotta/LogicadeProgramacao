// Objetos em js 

const usuario = 
{
    nome: "Maria",
    idade: 32
}

usuario.idade = 26;
console.log(usuario);

// array 

const numeros = [1, 2, 3]
numeros.push(4);
console.log(numeros[0]);
console.log(numeros[2]);
console.log(numeros[10]);
console.log(numeros);

// conectar - string - template

let mensagem = "Olá mundo !";
let nome = "Paulo";
console.log("Sr " + nome + "mensagem: " + mensagem);
console.log (`Sr ${nome} mensagem: ${mensagem}`);
