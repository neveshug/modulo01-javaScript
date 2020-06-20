// Crie um programa para calcular o IMC e nivel de obesidade

const nome = "Carlos";
const peso = 120;
const altura = 1.88;

// A partir desses dados armazene em uma constante chamada imc o cálculo do índice de massa corporal definido pela fórmula abaixo:

const imc = peso / (altura * altura)

// SE o IMC maior ou igual a 30 : imprima na tela "Carlos você esta acima do peso"
if(imc >= 30){
    console.log(`${nome} você esta acima do peso`)
}
// SE o IMC menor que 29.9 : imprima na tela "Carlos você não esta acima do peso"
if(imc < 29.9){
    console.log(`${nome} você não esta acima do peso`)
}