


// function criarMatriz() {
//   let matriz = [];
//   for (let linha = 0; linha < 4; linha++) { 
//     for (let coluna = 0; coluna < 4; coluna++) {
//      let valor = prompt("digite os valores das linhas :");
//       console.log(`Linha: ${linha} Coluna: ${coluna} = ${valor}`);
//       let linhaDaMatriz = matriz[linha];
//       // console.log(linhaDaMatriz)
//       if(linhaDaMatriz === undefined){
//         matriz.push([valor])
//       }else{
//         linhaDaMatriz.push(valor)
//       }
//     }

//   }
//   document.writeln(matriz)
// }




//  proposta seria criar uma planilha financeira

function planilhaFinanceira() {

  let matriz = []

  // Descrição do produto, tipo, valor, desconto  

  for (let linha = 0; linha < 4; linha++) {
    for (let coluna = 0; coluna < 4; coluna++) {
      let descricao
      let valorDaMatriz = matriz[linha]
      switch (coluna) {
        case 0:
          descricao = "Descrição do produto";
          break;
        case 1:
          descricao = "Tipo";
          break;
        case 2:
          descricao = "valor";
          break;
        case 3:
          descricao = "desconto"
          break;
        default:
          descricao = "Coluna inexistente"
      }
      let valor = prompt(`Produto ${linha +1}: ${descricao}`)
      if (valorDaMatriz === undefined) {
        matriz.push([valor])
      }else{
        valorDaMatriz.push(valor)
      }
    }
  }
  buscarInfo(matriz)
}

function buscarInfo(matrizBuscadora){
  // let matrizBuscadora = [["Violão", "Instrumento", "500,00", "15%"], ["Moto", "Automóvel", "6.000,00", "25%"]]
   for (let linha = 0; linha < 4; linha++) {
    for (let coluna = 0; coluna < 4; coluna++) {
        if(matrizBuscadora[linha][coluna] === "Instrumento"){
          console.log(matrizBuscadora[linha])

        }
     
     
      console.log()  
   
    }
  }
}  