// 

let pessoa = {
    nome: "Júlios",
    idade: 25,
    cpf: 23443223476
}

let pessoas = []

// função para criar uma nova pessoa 

function CriarPessoa(nome, idade, cpf) {
    const pessoa = {
        nome: nome,
        idade: idade,
        cpf: cpf
    }
    pessoas.push(pessoa)
    console.log(`Pessoa adicionada: ${nome}, ${idade} anos, ${cpf}`)
}

// função listar todas as pessoas 


function listarPessoas() {
    console.log("\n lista de pessoas : ")
    pessoas.forEach((valor, indice) => {
        console.log(`${indice}: ${valor.nome} - ${valor.idade} anos, ${valor.cpf} `)
    })
}
// ========================================================================================


// Função para atualizar uma pessoa ! 

function atualizarPessoa(indice, novo_nome, nova_idade, novo_cpf) {
    if (pessoas[indice]){
        pessoas[indice].nome = novo_nome;
        pessoas[indice].idade = nova_idade;
        pessoas[indice].cpf = novo_cpf;
        console.log(`Pessoa atualizada no índice ${indice}`)
    }
    else{
        console.log("Índice inválido!")
    }
}


// funçao para excluir uma pessoa ! 


function excluirPessoa(indice){
    if(pessoas[indice]){
        const removida = pessoas.splice(indice,1)
        console.log(`Pessoa removida: ${removida[0].nome}`)
    }
    else{
        console.log("Índice inválido!")
    }
}

//  =======================================================================================

CriarPessoa("Matheus", 35, 13343444300)
CriarPessoa("João", 32, 14434444300)
CriarPessoa("Pedro", 25, 15673444300)
CriarPessoa("Priscila", 18, 16663444300)
CriarPessoa("Valeria", 67, 18783444300)
CriarPessoa("Aparecida", 77, 13365644300)
CriarPessoa("Suzana", 46, 13375744300)
CriarPessoa("Rita", 47, 13398744300)
CriarPessoa("Jeferson", 88, 13343454300)
CriarPessoa("Pablo", 33, 13348764300)

listarPessoas()

atualizarPessoa(2, "Chapolin", 20, 2344322345)

listarPessoas()

excluirPessoa(2)

listarPessoas()




// ==========================================================================================

// explicação completa, linha por linha, incluindo as novas funções: atualizar e excluir pessoa.

// ✅ Parte 1: Declaração de variáveis
// javascript
// Copiar
// Editar
// let pessoa = {
//     nome: "Júlios",
//     idade: 25,
//     cpf: 23443223476
// }
// ✅ Criamos um objeto chamado pessoa com 3 propriedades:
// ➡️ nome: "Júlios"
// ➡️ idade: 25
// ➡️ cpf: 23443223476

// 💡 Obs.: Esse objeto não está sendo usado no restante do código, mas serve como exemplo de uma pessoa.

// javascript
// Copiar
// Editar
// let pessoas = []
// ✅ Criamos um array vazio chamado pessoas.
// ➡️ Aqui vamos guardar todas as pessoas que criarmos.

// ✅ Parte 2: Função para criar uma nova pessoa
// javascript
// Copiar
// Editar
// function CriarPessoa(nome, idade, cpf) {
// ✅ Criamos a função CriarPessoa que recebe 3 parâmetros:
// ➡️ nome → nome da pessoa.
// ➡️ idade → idade da pessoa.
// ➡️ cpf → CPF da pessoa.

// javascript
// Copiar
// Editar
//     const pessoa = {
//         nome: nome,
//         idade: idade,
//         cpf: cpf
//     }
// ✅ Dentro da função, criamos um objeto pessoa com os valores recebidos.
// ➡️ Cada propriedade recebe o valor correspondente.

// javascript
// Copiar
// Editar
//     pessoas.push(pessoa)
// ✅ Usamos .push() para adicionar o objeto pessoa no array pessoas.

// javascript
// Copiar
// Editar
//     console.log(`Pessoa adicionada: ${nome}, ${idade} anos, ${cpf}`)
// ✅ Mostramos no console uma mensagem confirmando a adição da pessoa.

// javascript
// Copiar
// Editar
// }
// ✅ Fechamos a função CriarPessoa.

// ✅ Parte 3: Função para listar todas as pessoas
// javascript
// Copiar
// Editar
// function listarPessoas() {
// ✅ Criamos a função listarPessoas.
// ➡️ Não recebe parâmetros.
// ➡️ Serve para mostrar todas as pessoas cadastradas.

// javascript
// Copiar
// Editar
//     console.log("\n lista de pessoas : ")
// ✅ Mostramos no console o título da lista.
// ➡️ \n → quebra de linha para separar visualmente.

// javascript
// Copiar
// Editar
//     pessoas.forEach((valor, indice) => {
// ✅ Usamos .forEach() para percorrer o array pessoas.
// ➡️ valor → representa cada objeto pessoa.
// ➡️ indice → representa a posição no array.

// javascript
// Copiar
// Editar
//         console.log(`${indice}: ${valor.nome} - ${valor.idade} anos, ${valor.cpf} `)
// ✅ Mostramos no console:
// ➡️ O número (indice).
// ➡️ O nome (valor.nome).
// ➡️ A idade (valor.idade).
// ➡️ O CPF (valor.cpf).

// javascript
// Copiar
// Editar
//     })
// }
// ✅ Fechamos o .forEach() e depois a função listarPessoas.

// ✅ Parte 4: Função para atualizar uma pessoa
// javascript
// Copiar
// Editar
// function atualizarPessoa(indice, novo_nome, nova_idade, novo_cpf) {
// ✅ Criamos a função atualizarPessoa com 4 parâmetros:
// ➡️ indice → a posição da pessoa no array.
// ➡️ novo_nome → novo nome.
// ➡️ nova_idade → nova idade.
// ➡️ novo_cpf → novo CPF.

// javascript
// Copiar
// Editar
//     if (pessoas[indice]){
// ✅ Verificamos se existe uma pessoa nesse indice.
// ➡️ Evita tentar atualizar uma posição inexistente.

// javascript
// Copiar
// Editar
//         pessoas[indice].nome = novo_nome;
//         pessoas[indice].idade = nova_idade;
//         pessoas[indice].cpf = novo_cpf;
// ✅ Se a pessoa existe, atualizamos as 3 propriedades:
// ➡️ nome → recebe novo_nome.
// ➡️ idade → recebe nova_idade.
// ➡️ cpf → recebe novo_cpf.

// javascript
// Copiar
// Editar
//         console.log(`Pessoa atualizada no índice ${indice}`)
// ✅ Mostramos no console que a pessoa foi atualizada.

// javascript
// Copiar
// Editar
//     } else {
//         console.log("Índice inválido!")
//     }
// ✅ Se não existir pessoa nesse índice, mostramos "Índice inválido!".

// javascript
// Copiar
// Editar
// }
// ✅ Fechamos a função atualizarPessoa.

// ✅ Parte 5: Função para excluir uma pessoa
// javascript
// Copiar
// Editar
// function excluirPessoa(indice){
// ✅ Criamos a função excluirPessoa com 1 parâmetro:
// ➡️ indice → posição da pessoa que queremos remover.

// javascript
// Copiar
// Editar
//     if(pessoas[indice]){
// ✅ Verificamos se existe uma pessoa nesse índice.

// javascript
// Copiar
// Editar
//         const removida = pessoas.splice(indice,1)
// ✅ Se existe:
// ➡️ Usamos .splice(indice, 1) para remover 1 elemento no índice especificado.
// ➡️ O .splice() devolve um array com os elementos removidos.
// ➡️ Guardamos esse array na variável removida.

// javascript
// Copiar
// Editar
//         console.log(`Pessoa removida: ${removida[0].nome}`)
// ✅ Mostramos no console o nome da pessoa que foi removida.
// ➡️ Como .splice() devolve um array, usamos [0] para pegar o primeiro elemento.

// javascript
// Copiar
// Editar
//     } else {
//         console.log("Índice inválido!")
//     }
// ✅ Se não existe pessoa nesse índice, mostramos "Índice inválido!".

// javascript
// Copiar
// Editar
// }
// ✅ Fechamos a função excluirPessoa.

// ✅ Parte 6: Execução das funções
// javascript
// Copiar
// Editar
// CriarPessoa("Matheus", 35, 13343444300)
// CriarPessoa("João", 32, 14434444300)
// CriarPessoa("Pedro", 25, 15673444300)
// CriarPessoa("Priscila", 18, 16663444300)
// CriarPessoa("Valeria", 67, 18783444300)
// CriarPessoa("Aparecida", 77, 13365644300)
// CriarPessoa("Suzana", 46, 13375744300)
// CriarPessoa("Rita", 47, 13398744300)
// CriarPessoa("Jeferson", 88, 13343454300)
// CriarPessoa("Pablo", 33, 13348764300)
// ✅ Aqui estamos criando 10 pessoas e adicionando no array pessoas.
// ➡️ Cada chamada cria um objeto e adiciona na lista.

// javascript
// Copiar
// Editar
// listarPessoas()
// ✅ Chamamos a função listarPessoas() para mostrar todas as pessoas cadastradas.

// javascript
// Copiar
// Editar
// atualizarPessoa(2, "Chapolin", 20, 2344322345)
// ✅ Atualizamos a pessoa no índice 2 (ou seja, a terceira da lista):
// ➡️ Nome → "Chapolin"
// ➡️ Idade → 20
// ➡️ CPF → 2344322345

// javascript
// Copiar
// Editar
// listarPessoas()
// ✅ Chamamos novamente listarPessoas() para ver a lista atualizada.

// javascript
// Copiar
// Editar
// excluirPessoa(2)
// ✅ Excluímos a pessoa no índice 2 (que agora é "Chapolin").

// javascript
// Copiar
// Editar
// listarPessoas()
// ✅ Mostramos a lista final, já sem a pessoa removida.

// ✅ Resumo do fluxo:
// Criamos várias pessoas.

// Listamos todas.

// Atualizamos uma.

// Listamos novamente.

// Excluímos uma.

// Listamos pela última vez.

// ✅ O que você aprendeu?
// Conceito	Descrição
// Objeto	Estrutura com várias propriedades (nome, idade, cpf).
// Array	Lista que guarda objetos (as pessoas).
// .push()	Adiciona uma pessoa ao final da lista.
// .forEach()	Percorre a lista mostrando cada pessoa.
// .splice()	Remove pessoa de uma posição específica.
// Atualização	Modificamos propriedades de um objeto existente.