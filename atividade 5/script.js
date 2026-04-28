let senhaDefinida = prompt("defina uma senha:");
let senhaDigitada = prompt("Digite a senha para entrar:");

while (senhaDigitada !== senhaDefinida) {
    console.log("Senha incorreta, tente novamente!");
    senhaDigitada = prompt("Digitea senha novamente:");
}

console.log("Acesso concedido!");