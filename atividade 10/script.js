let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let palpite;
let tentativas = 0;

while (palpite !== numeroSecreto) {
    palpite = number(prompt ("Tente adivinhar o número (1 a 10:"));
    tentativas++;

    if (palpite !== numeroSecreto) {
        console.log("Errou! tente noamente");
    }
}

console.log("Parabens, voce acertou em " + tentativas + " tentativas!");
