const montante = 90000;
const capital = 60000;
const periodo = 24;

const taxaJuros = (montante / capital) ** (1 / periodo) - 1;

console.log(`A taxa do financiamento foi: ${(taxaJuros * 100).toFixed(2)}%`);
