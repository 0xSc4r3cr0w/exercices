// EXERCÍCIO 8
// Faça um programa que receba um numero negativo e mostre o seu equivalente positivo.

const negative_number = Number(prompt("Digite um número negativo(com sinal -, como em -20): "));

if(isNaN(negative_number) || !(negative_number < 0)) {
    console.log("Valor inválido");
} else {
    console.log("O equivalente positivo do valor negativo mostrado é: " + negative_number * -1);
}
