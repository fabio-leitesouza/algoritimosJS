const jogos = require('./listaJogos');

function menorValor(arrProdutos, posicaoInicial) {
    let maisBarato = posicaoInicial;
    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
          maisBarato = atual
        }
      }
      return maisBarato; //retornará um número referente a posição do array
}
console.log(jogos[menorValor(jogos, 0)])
module.exports = menorValor;