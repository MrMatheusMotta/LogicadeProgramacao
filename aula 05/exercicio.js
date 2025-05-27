// Exercícios:

//Crie um array de strings com nome de produtos e utilize as funções:
//Inserir valores no array - push ou splice
//Delete o primeiro valor do array
//Delete o último valor do array
//Atualize o valor do índice 2 de sue array
//Excluir a partir do índice 2 a quantidade de 3 elementos 
//Conta a quantidade de elementos no seu array


let produtos = ["Vassoura", "Pano de chão", "Rodo", "Amaciante", "Desinfetante", "Sabão em pó"] ;

produtos.push("Esponja de aço");
produtos.splice(3, 0, "Pá de lixo");
produtos.shift();
produtos.pop();
produtos.splice(2, 1, "Saco de lixo");
produtos.splice(2, 3);

console.log(produtos)
console.log(produtos.length)