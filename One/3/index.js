// EXERCÍCIO 3
// Escreva um programa para ler as dimensões de um retângulo (base e altura), calcular e escrever a área do retângulo.
// Obs.: Área = ( Base * Altura ).

const base = Number(prompt("Digite a base do retângulo: "));
const height = Number(prompt("Digite a altura do retângulo: "));
const area = base * height;

console.log(isNaN(area) ? "Valor inválido" : area);
