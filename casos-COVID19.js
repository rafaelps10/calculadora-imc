const pessoasInfectadas = 1000;
const pessoasTransmitidas = 4;
const tempo = 100;

const casosNovos = pessoasInfectadas * pessoasTransmitidas ** (tempo / 7);

console.log(casosNovos);
