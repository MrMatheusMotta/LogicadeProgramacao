// Contagem regressiva

//  laço 

// for(let i = 10; i >= 0; i--){
//     console.log(i)
// }


// função recursiva 

function contagemRegressiva(n){
    console.log(n)
    // caso base
    if(n === 0){
        return;
    }
    contagemRegressiva(n - 1)
}

contagemRegressiva(5)