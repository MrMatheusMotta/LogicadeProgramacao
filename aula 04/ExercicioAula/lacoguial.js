//  Classes dos laços de repetição 

//  Classe While / Do While 

// While é uma estrutura que você consegue fazer uma repetição, 
// de forma objetiva, apenas com uma condição ! 



//  Classe for

// 


//  FAZER UM PROGRAMA PENSANDO QUE SOMOS UM BANCO E TEMOS UMA MÁQUINA DE CARTÃO !
// NOSSA MÁQUINA VAI PERMITIR A PESSOA TENTE 3 VEZES COLOCAR SUA SENHA, SE A SENHA FALHAR 3X BLOQUEAMOS 
// E ELA NÃO PODE TENTARAIS .


function aulaguial() {

    const senha = 12345
    let contador = 1;
    // let senhaDoUsuario = parseInt(prompt("Digite sua senha : ")); -------- 
    // Nesse caso abaixo, não precisou declarar a variável, pois a verificação acontece
    //  direto na condição do laço.


    while (senha !== parseInt(prompt("Digite sua senha : "))) {
        contador++

        if (contador > 3) {
            document.writeln("VOCÊ FOI BLOQUEADO!")
            return;
        } else {
            alert("Senha incorreta, tente novamente!")
        }

    }

    document.writeln("VERIFICANDO OS MILHÕES!")



    //  -----------------------------------------------------------------------------------------------
    // do {
    //     let senhaDoUsuario = parseInt(prompt("Digite sua senha : "));
    //     if (senhaDoUsuario === senha) {
    //         document.writeln("Verificando valores ...")
    //         return;
    //     } else {

    //         alert("Senha incorreta, tente novamente!")
    //     }

    //     contador++
    // } while (contador <= 3)
    // document.writeln("VOCÊ FOI BLOQUEADO!")

    // Duas formas de executar o Do While ----------- Casos que precise criar um loop infinito em busca de um
    // determinado valor ou dado específico até que seja encontrado.
    // --------------------------------------------------------------------------------------------------------
    //    do {
    //     if (contador > 3) {
    //         document.writeln("VOCÊ FOI BLOQUEADO!")
    //         return;
    //     }
    //     let senhaDoUsuario = parseInt(prompt("Digite sua senha : "));
    //     if (senhaDoUsuario === senha) {
    //         document.writeln("Verificando valores ...")
    //         return;
    //     } else {

    //         alert("Senha incorreta, tente novamente!")
    //     }

    //     contador++
    // } while (true)



    // -------------------------------------------------------------------------------------


    // for (let i = 1; i <= 3; i++) {
    //     let senhaDoUsuario = parseInt(prompt("Digite sua senha : "));
    //     if (senhaDoUsuario === senha) {
    //         document.writeln("Verificando valores ...")
    //         return;
    //     } else {

    //         alert("Senha incorreta, tente novamente!")
    //     }
    // }
    // document.writeln("VOCÊ FOI BLOQUEADO!")
}


