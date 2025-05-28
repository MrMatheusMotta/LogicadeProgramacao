


// uso com forEach

const produtos = [
  { nome: "Notebook", preco: 3500},
  { nome: "Tablet", preco: 2500},
  { nome: "Impressora", preco: 1300},
  { nome: "Modem", preco: 300},
  { nome: "Mouse", preco: 80},
  { nome: "Teclado", preco: 70},
  { nome: "Pendrive", preco: 55}

]

console.log("Produtos acima de R$100: ")
produtos.forEach(function(item){
        console.log(`- ${item.nome}: R$ ${item.preco}`)
})