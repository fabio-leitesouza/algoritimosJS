//1-criar um algoritimo que mostre o jogo com o menor valor. Utilizar a array de objetos abaixo
class Jogos{
    constructor(nome, preco){
        this.nome = nome
        this.preco = preco
    }
}

const zelda = new Jogos('Zelda', 250)
const megaman = new Jogos('Mega Man', 170)
const shinobi = new Jogos('Shinobe', 220)
const kungfuMaster = new Jogos('Kung Fu Master', 175)
const alexKid = new Jogos('Alex Kid', 100)
const blackBelt = new Jogos('Black Belt', 149)
const chrono = new Jogos('Chrono Trigger', 152)
const kidcamaleao = new Jogos('Kid Cameleon', 164)
const desertstrike = new Jogos('Desert Strike', 192)
const bof = new Jogos('Breath of Fire', 187)
const secret = new Jogos('Secret of Mana', 145)

const jogos = []
jogos.push(zelda, megaman, shinobi, kungfuMaster, alexKid, blackBelt, chrono, kidcamaleao, desertstrike, bof, secret)

module.exports = jogos