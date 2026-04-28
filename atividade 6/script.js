let numero = number(prompt("Digite um número"));
let fatorial = 1;

for (let i = numero; i >= 1; i--) {
    fatorial *= i;
}

console.log("O fatorial de " + numero + "é: + fatorial);")