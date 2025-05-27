//crud simples



// "CRUD" é um acrônimo usado em desenvolvimento de software que significa:

// Create (Criar)

// Read (Ler)

// Update (Atualizar)

// Delete (Excluir)

// Essas quatro operações básicas são fundamentais para manipular dados em sistemas, principalmente em bancos de dados e APIs.

// ✅ Significado e Exemplos:
// 1. Create (Criar)
// Adicionar novos dados ao sistema.

// Exemplo: adicionar um novo usuário ao banco de dados.

// sql
// Copiar
// Editar
// INSERT INTO users (name, email) VALUES ('Maria', 'maria@email.com');
// 2. Read (Ler)
// Consultar dados existentes.

// Exemplo: buscar todos os usuários cadastrados.

// sql
// Copiar
// Editar
// SELECT * FROM users;
// 3. Update (Atualizar)
// Modificar dados existentes.

// Exemplo: alterar o e-mail de um usuário.

// sql
// Copiar
// Editar
// UPDATE users SET email = 'novo@email.com' WHERE id = 1;
// 4. Delete (Excluir)
// Remover dados do sistema.

// Exemplo: deletar um usuário.

// sql
// Copiar
// Editar
// DELETE FROM users WHERE id = 1;
// ✅ CRUD na Prática: Exemplo com JavaScript (fetch API)
// javascript
// Copiar
// Editar
// // CREATE
// fetch('/api/users', {
//   method: 'POST',
//   body: JSON.stringify({ name: 'Maria', email: 'maria@email.com' }),
//   headers: { 'Content-Type': 'application/json' }
// });

// // READ
// fetch('/api/users')
//   .then(response => response.json())
//   .then(data => console.log(data));

// // UPDATE
// fetch('/api/users/1', {
//   method: 'PUT',
//   body: JSON.stringify({ email: 'novo@email.com' }),
//   headers: { 'Content-Type': 'application/json' }
// });

// // DELETE
// fetch('/api/users/1', { method: 'DELETE' });
// ✅ Onde se usa CRUD?
// Sistemas web (como sites de cadastro e e-commerce).

// Aplicativos de celular.

// APIs RESTful.

// Sistemas administrativos internos.

let pessoas = [];

//create
function adicionar(nome){
    pessoas.push(nome);
}
//Read
function listar(){
    console.log(pessoas)
}
//Update
function atualizar(indice, novoNome){
    pessoas[indice] = novoNome
}
//delet
function remover(indice){
    pessoas.splice(indice, 1)
}

adicionar("Carlos");
adicionar("Marcia");
atualizar()
listar();
remover(1);
listar();