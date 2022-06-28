// EXERCÍCIO 5
// Faça um programa para ler a base e a altura de um triângulo. Em seguida, escreva a 
// área do mesmo. Obs.: Área = ( Base * Altura ) / 2.

const base = Number(prompt("Digite a base do triângulo: "));
const height = Number(prompt("Digite a altura do triângulo: "));
const area = (base * height) / 2;

console.log(isNaN(area) ? "Algum valor não numérico foi inserido" : area);
