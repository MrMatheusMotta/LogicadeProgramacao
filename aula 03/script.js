function idade(){
    let idade =parseInt(prompt("Informe a idade: ")) // faz uma requisição de entrada de dados na página html ----- parseFloat ( transforma string em numero real) parseint ( transforma string em numero real)
    // document.writeln(`A idade é: ${idade}`) // exibe a mensagem na página html
    // alert(`A idade é ${idade}`) // exibe um alerta na página html
    let nascionalidade = prompt("Informe a nacionalidade: ").toLowerCase() // toLowerCase torna todas as letras minúsculas na entrada dos dados
    if(idade >= 16){
        if(nascionalidade === "brasileira"){
            document.writeln("Pode votar no Brasil!") // document.writeln exibe a informação na página, terminal.
        }else{
            document.writeln("Não pode votar no Brasil!")
        }
    }else{
        document.writeln("Ainda não tem idade para votar! ")
    }
}