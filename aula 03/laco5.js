//  5 valores digitados - esses valores serão somados e no final do programa 
// mostre o total
// shift + alt + f = identação automática
// o comando prompt entende todos os dados de entrada como string, é necéssário fazer a alteração do tipo do dado com o comando parseInt ou parseFloat
// ou declara Number a entrada do dado na variável que recebe o número .


function somar() {
    let soma = 0
    let contador = 0

    while (contador < 5) {
        let numero = Number(prompt("Digite um valor "));
        soma += numero // (soma = soma + numero)
        contador++
    }

    alert(`A soma dos 5 números foi ${soma}`)
}

