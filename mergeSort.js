const listaJogos = require('./listaJogos');

function mergeSort(array, nivelAninhamento = 0) {

  console.log(`nível de aninhamento: ${nivelAninhamento}`)
  console.log(array)
  //se o array for maior do que 1 ele vai ser dividido
  if(array.length > 1) {
    const meio = Math.floor(array.length / 2); //vou arredendar para baixo e dividir
    const parte1 = mergeSort(array.slice(0, meio), nivelAninhamento + 1);
    const parte2 = mergeSort(array.slice(meio, array.length), nivelAninhamento + 1);
    array = ordena(parte1, parte2);//passar a função para ordenar
  }

  return array;
}

function ordena(parte1, parte2) {
  let posicaoAtualParte1 = 0 
  let posicaoAtualParte2 = 0
  const resultado = []

  while (posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length) {
    let produtoAtualParte1 = parte1[posicaoAtualParte1]
    let produtoAtualParte2 = parte2[posicaoAtualParte2]

    if (produtoAtualParte1.preco < produtoAtualParte2.preco) {
      resultado.push(produtoAtualParte1)
      posicaoAtualParte1++
    } else {
      resultado.push(produtoAtualParte2)
      posicaoAtualParte2++
    }
  }

  return resultado.concat(posicaoAtualParte1 < parte1.length
    ? parte1.slice(posicaoAtualParte1)
    : parte2.slice(posicaoAtualParte2))
}

console.log(mergeSort(listaJogos));