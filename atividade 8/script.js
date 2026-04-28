let total = 0;
let preço;

do{
    preço = Number(promp("Digite o preço do produto (0 para finalizar:"));
    total += preço;
} while (preço !== 0);

console.log("total da compra: R$ " + total);