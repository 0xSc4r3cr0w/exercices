// EXERCÍCIO 6
// Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual
// de reajuste. Calcular e escrever o valor do novo salário.

const month_gain = Number(prompt("Digite o quanto você ganha por mês: "));
const reajustment_percent = Number(prompt("Digite o valor de reajuste salarial(em porcentagem, exemplo: 5): "));
const reajusted_gain = reajustment_percent/100 * month_gain;
const new_gain = month_gain - reajusted_gain;

console.log(isNaN(new_gain) ? "Algum valor inválido foi introduzido" : new_gain);
