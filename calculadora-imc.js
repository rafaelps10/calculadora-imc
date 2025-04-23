const nome ="Rafael"
const peso = 88.5;
const altura = 1.83;

const imc = (peso / altura ** 2).toFixed(2);

if (imc <= 18.5) {
    console.log(`Olá, ${nome}! Você precisa se alimentar mais. Está muito magro.`);
} else if (imc > 18.5 && imc <= 24.9) {
    console.log(`Muito bem, ${nome}! Você está com o IMC ideal. Parabéns!!!`);
} else if (imc > 24.9 && imc < 30) {
    console.log(`Atenção, ${nome}!!! Você está acima do peso.`);
} else {
    console.log(`É, meu fi, tem jeito não. ${nome}, procure uma academia URGENTE!`);
}
