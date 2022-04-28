const listaJogos = require('./listaJogos');
const trocaLugar = require('./encontraMenores');

function quickSort(array, esquerda, direita) {
  if (array.length > 1) {
    let indiceAtual = particiona(array, esquerda, direita);
    if (esquerda < indiceAtual - 1) {
      quickSort(array, esquerda, indiceAtual - 1);
    }
    if (indiceAtual < direita) {
      quickSort(array, indiceAtual, direita)
    }
  }
  return array;
}

function particiona(array, esquerda, direita) {
//   console.log('array', array)
//   console.log('esquerda, direita', esquerda, direita)
  let pivo = array[Math.floor((esquerda + direita) / 2)]
  let atualEsquerda = esquerda; //0
  let atualDireita = direita; //10

  while (atualEsquerda <= atualDireita) {
    while (array[atualEsquerda].preco < pivo.preco) {
      atualEsquerda++ //encontrou um menor na esquerda
    }

    while (array[atualDireita].preco > pivo.preco) {
      atualDireita-- //encontrou um menor na direita
    }

    if (atualEsquerda <= atualDireita) {
      trocaLugar(array, atualEsquerda, atualDireita);
      atualEsquerda++;
      atualDireita--;
    }
  }
  return atualEsquerda;
}

//console.log(quickSort(listaJogos, 0, listaJogos.length - 1))
const listaOrdenada = quickSort(listaJogos, 0, listaJogos.length - 1)
console.table(listaJogos)

module.exports = listaOrdenada
