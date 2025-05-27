//Crie um programa que contenha um array com 8 notas 

//utilize for para varrer o array, e o switch-case para analisar 
// a seguinte situação: 
//nota >= 9 conceito A
//nota < 9 E >= 7 conceito B
//nota  < 7 E >= 5 conceito C
//nota  < 5 E >= 3 conceito D
//nota <3  conceito E
//nota = 0 conceito F


// leitura na tela 

// nota: 9.5 -> conceito A 
// nota: 8 -> Conceito B
// // ...


let notas = [9.5, 8, 6.5, 2.8, 10, 6.8, 7, 7.7];
let conceito = "";

for (let i = 0; i < notas.length; i++) {
    let nota = notas[i]

    switch (true) {
        case(nota >= 9):
            conceito = "A"
            break;
        case(nota < 9 && nota >= 7):
            conceito = "B"
            break;
        case(nota < 7 && nota >= 5):
            conceito = "C"
            break;
        case(nota < 5 && nota >= 3):
            conceito = "D"
            break;
        case(nota < 3):
            conceito = "E"
            break;
        case(nota === 0):
            conceito = "F"
            break;
    default:
        conceito = "Invalido!"
    }
    console.log(`Nota ${nota} -> Conceito: ${conceito}`)
}





