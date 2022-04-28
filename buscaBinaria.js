const listaOrdenada = require('./quickSort')

function busca(array, de, ate, valorBuscado){
    const meio = Math.floor((de + ate)/2);
    const atual = array[meio];
//    if(de > ate){
//        return -1;
//    } 

    if(valorBuscado === atual.preco){
        return meio;
    }
    if(valorBuscado < atual.preco) {
        return busca(array, de, meio - 1, valorBuscado);
    }
    if(valorBuscado > atual.preco){
        return busca(array, meio + 1, ate, valorBuscado)
    }
}

console.log(busca(listaOrdenada, 0, listaOrdenada.length - 1, 149))
