let n = number(prompt("digite um número inteiro positivo:"));
let soma = 0;

for (let i = 1; i <= n; i++) {
    soma += i;
}

console.log("a soma de 1 até " + n + " é: " + soma);