const listaJogos = require('./listaJogos')

function encontraMenores(pivo, array) {
  let menores = 0;

  for(let atual = 0; atual < array.length; atual++) {
    let produtoAtual = array[atual]
    if (produtoAtual.preco < pivo.preco) {
      menores++
    }
    
  }

  trocaLugar(array, array.indexOf(pivo), menores)
  return array
}

function trocaLugar(array, de, para) {
  const elem1 = array[de]
  const elem2 = array[para]

  array[para] = elem1
  array[de] = elem2
}


function divideNoPivo(array) {
  let pivo = array[Math.floor(array.length / 2)];
  encontraMenores(pivo, array);
  let valoresMenores = 0;


  for(let analisando = 0; analisando < array.length; analisando++) {
    let atual = array[analisando];
    if(atual.preco < pivo.preco ) {
      trocaLugar(array, analisando, valoresMenores)
      valoresMenores++
    }
  }

  return array;
}


//console.log(divideNoPivo(listaJogos));
//console.log(encontraMenores(listaJogos[6], listaJogos));

module.exports = trocaLugar;