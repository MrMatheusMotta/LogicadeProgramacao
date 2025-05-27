

function somar() {
    let soma = 0
    let contador = 0

    while (contador < 5) {
        let numero = Number(prompt("Digite um valor "));
        if (isNaN(numero)) {
            alert("Isso não é um número! Favor digitar um número válido!")

        } else {
            soma += numero // (soma = soma + numero)
            contador++
        }

    }


    alert(`A soma dos 5 números foi ${soma}`)
}


// console.log(isNaN("abc"));
// console.log(isNaN("10"));
// console.log(isNaN(20));
