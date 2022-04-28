const jogos = require('./listaJogos');
const menorValor = require('./menorValor');

              // 1
for (let atual = 0; atual < jogos.length - 1; atual++) {
  let menor = menorValor(jogos, atual) //verficar o menor valor iniciando no indice zero, ou seja "atual". a let menor gardará o menor valor a partir do zero e assim consecutivamente

  let jogosAtual = jogos[atual];
  let jogosMenorPreco = jogos[menor];

  jogos[atual] = jogosMenorPreco
  jogos[menor] = jogosAtual
}

console.log(jogos)