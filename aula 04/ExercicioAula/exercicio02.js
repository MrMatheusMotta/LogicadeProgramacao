// 

function teste (){
    let operador = prompt("Digite a operação desejada (+,-,*,/)")
    let num1 = Number(prompt("Digite o 1º valor: "));
    let num2 = Number(prompt("Digite o 2º valor: "));
    let resultado = 0;

switch (operador){
    case "*":
        resultado = num1 * num2
        document.writeln(resultado)
        break;
    case "/":
        resultado = num1 / num2
        document.writeln(resultado)
        break;
    case "+":
        resultado = num1 + num2
        document.writeln(resultado)
        break;
    case "-":
        resultado = num1 - num2
        document.writeln(resultado)
        break;
default:
    document.writeln("Opção inválida!")
    return;
}

}

teste();







