const precoDoTenis = 12999;
const meuDinheiro = 8000;

const desconto = precoDoTenis - meuDinheiro;

const cupom = (100 * desconto / precoDoTenis).toFixed(2);

console.log(`O valor do cupom deve ser ${cupom}%`);
