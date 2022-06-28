// EXERCÍCIO 2
// Escreva um programa para ler um valor (do teclado) e escrever (na tela) o seu antecessor.

const input = Number(prompt("Digite um valor numérico"));
const result = input < 0 ? input + 1 : input - 1;
console.log(isNaN(input) ? "Valor inválido" : result);
