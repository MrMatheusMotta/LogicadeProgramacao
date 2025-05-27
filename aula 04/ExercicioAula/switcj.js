//  Uso do if na tomada de decisão ....

let dia = "segunda";

if (dia === "segunda") {
  console.log("Hoje é segunda-feira: Começo da semana.");
} else if (dia === "quarta") {
  console.log("Hoje é quarta-feira: Meio da semana.");
} else if (dia === "sexta") {
  console.log("Hoje é sexta-feira: Fim de semana chegando!");
} else {
  console.log("Dia não reconhecido.");
}


// -----------------------------------------------------------------------------

//  Uso do switch case para tomada de decisão ----------------------------

let dias = "terça"

switch(dias){
case "segunda":
     console.log("Hoje é segunda-feira: Começo da semana.");
     break;
case "quarta":
    console.log("Hoje é quarta-feira: Meio da semana.");
    break;
case "sexta":
    console.log("Hoje é sexta-feira: Fim de semana chegando!");
    break;
default:
    console.log("Dia não reconhecido.");

}