// Crie um array de 9 elementos numéricos e mostre através do laço todo o array

let valor = [20, 10, 32, 41, 78, 15, 14, 74, 100];

for(let i = 0; i < valor.length ; i++){
    console.log("Os números são: " + valor[i])
}

//Neste array descubra a quantidade dos valores impares desta lista


let valor2 = [20, 10, 32, 41, 78, 15, 14, 74, 100];
var cont = 0
for(let i = 0; i < valor2.length ; i++){
    if(valor2[i] % 2 === 1){
        cont++
    }
    console.log("Os números são: " + valor2[i])

}
console.log("Resultado de nº impares: " + cont)



//foreach
valor2.forEach(function(item, indice){
    console.log("frutas na posição: ", indice, "é: ", item )
})
console.log("-------------- exemplo 2 -------------------")

valor2.forEach((valor2, index) => {
    console.log("frutas na posição: ", index, "é: ", valor2 )

// ------------------------------------------------------------------------------------
})



