// EXERCÍCIO 7
// Faça um programa que leia dois valores e informe qual é o maior e o menor dos dois
// valores informados.

const value_one = Number(prompt("Digite o primeiro valor: "));
const value_two = Number(prompt("Digite o segundo valor: "));

if(isNaN(value_one) || isNaN(value_two)) {
    console.log("Valores inválidos");
} else if(value_one == value_two){
    console.log("Valores iguais");
} else{
    console.log(value_one < value_two ? `Valor um(${value_one}) é o MENOR valor` : `Valor um(${value_one}) é o MAIOR valor`);
    console.log(value_two < value_one ? `Valor dois(${value_two}) é o MENOR valor` : `Valor dois(${value_two}) é o MAIOR valor`);
}
