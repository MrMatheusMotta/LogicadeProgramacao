// if-switch
//Teste com switch case todos os dias da semana, caso não seja 
// um dia válido, apareça "dados inválidos."
// 1 - segunda, 2 - terça , 3 - quarta.. , outros números - "dados inválidos"


let semana = "10";


switch (semana) {
    case "1":
        console.log("Domingo");
        break;
    case "2":
        console.log("Segunda-Feira");
        break;
    case "3":
        console.log("Terça-Feira");
        break;
    case "4":
        console.log("Quarta-Feira");
        break;
    case "5":
        console.log("Quinta-feira");
        break;
    case "6":
        console.log("Sexta-feira");
        break;
    case "7":
        console.log("Sábado");
        break;
default:
    console.log("Opção inválida!");
}
