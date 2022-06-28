// EXERCÍCIO 9
// Escreva um programa que armazene o valor 10 em uma variável A e o valor 20 em
// uma variável B. A seguir (utilizando apenas atribuições entre variáveis) troque os
// seus conteúdos fazendo com que o valor que está em A passe para B e vice-versa. Ao
// final, escrever os valores que ficaram armazenados nas variáveis.

let A = 10;
let B = 20;

// Aqui eu usei do que o comando da questão me disponibilizou, adicionei uma variável C para transicionar o valor de B para A.
const C = B;

B = A
A = C;

console.log("O valor de A é " + A);
console.log("O valor de B é " + B);
