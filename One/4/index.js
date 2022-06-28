// EXERCÍCIO 4
// Faça um programa para ler três números inteiros e escrever a média dos números lidos.

const values = [];

for(let i = 0;i<3;i++){
    let input = prompt("Digite um número: ");
    values.push(Number(input));
}

const result = (values[0] + values[1] + values[2])/values.length;
console.log(isNaN(result) ? "Algum valor inválido foi introduzido" : result);
