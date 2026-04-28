let idade;
let maior = 0;
let menor = 999;

for (let i = 1; i <= 5; i++) {
    idade = number(prompt("Digite a idade da pessoa " + i + ":"));

if (idade > maior) {
    maior = idade;
}

if (idade < menor) {
    menor = idade;
}
}

console.log("Maior idade: " + maior);
console.log("Menor idade: " + menor);