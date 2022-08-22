let image = document.getElementById('image');
let imageComp = document.getElementById('image-comp');
document.getElementById('btn-atacar')
document.getElementById('deck-player')
let deckComp = document.getElementById('deck-comp');
document.getElementById('btn-defender')
let cartasPlayer = document.getElementById('cartas-player')
let cartascomp = document.getElementById('cartas-comp')
let mensagem = document.getElementById('mensagem-da-rodada')

const layoutDaCarta = {
    imagem: 'src/img/18.png',
}

const rengoku = {
    imagem: 'src/img/1.png',
    nome: 'Kyojuro Rengoku',
    classe: 'Pilar das Chamas',
    ataque: 10,
    defesa: 9
}

const tomioka = {
    imagem: 'src/img/2.png',
    nome: 'Gyu Tomioka',
    classe: 'Pilar da Agua',
    ataque: 8,
    defesa: 8
}

const obanai = {
    imagem: 'src/img/3.png',
    nome: 'Iguro Obanai',
    classe: 'Pilar das serpentes',
    ataque: 9,
    defesa: 5
}

const shinobu = {
    imagem: 'src/img/6.png',
    nome: 'shinobu',
    classe: 'Pilar dos Insetos',
    ataque: 6,
    defesa: 5
}

const sanemi = {
    imagem: 'src/img/7.png',
    nome: 'Sanemi',
    classe: 'Pilar do Vento',
    ataque: 6,
    defesa: 5
}

const gyumei = {
    imagem: 'src/img/4.png',
    nome: 'Gyumei',
    classe: 'Pilar da Rocha',
    ataque: 9,
    defesa: 10
}

const tokito = {
    imagem: 'src/img/5.png',
    nome: 'Tokito',
    classe: 'Pilar da nevoa',
    ataque: 8,
    defesa: 6
}

const mitsuri = {
    imagem: 'src/img/9.png',
    nome: 'Mitsuri',
    classe: 'Pilar do Amor',
    ataque: 8,
    defesa: 8
}

const uzui = {
    imagem: 'src/img/8.png',
    nome: 'Tengen Uzui',
    classe: 'Pilar do Som',
    ataque: 8,
    defesa: 8
}

const akaza = {
    imagem: 'src/img/12.png',
    nome: 'Akaza',
    classe: 'Lua Superior #3',
    ataque: 7,
    defesa: 10
}

const dakiGyutaro = {
    imagem: 'src/img/17.png',
    nome: 'Daki e Gyutaro',
    classe: 'Lua Superior #6',
    ataque: 8,
    defesa: 7
}

const kokushibou = {
    imagem: 'src/img/10.png',
    nome: 'Kokushibou',
    classe: 'Lua Superior #1',
    ataque: 10,
    defesa: 9
}

const nakime = {
    imagem: 'src/img/14.png',
    nome: 'Nakime',
    classe: 'Lua Superior #4',
    ataque: 6,
    defesa: 10
}

const douma = {
    imagem: 'src/img/11.png',
    nome: 'Douma',
    classe: 'Lua Superior #2',
    ataque: 7,
    defesa: 9
}

const kaigaku = {
    imagem: 'src/img/16.png',
    nome: 'Kaigaku',
    classe: 'Lua Superior #6',
    ataque: 7,
    defesa: 6
}

const hantengu = {
    imagem: 'src/img/13.png',
    nome: 'Hantengu',
    classe: 'Lua Superior #4',
    ataque: 7,
    defesa: 6
}

const gyokku = {
    imagem: 'src/img/15.png',
    nome: 'Gyokku',
    classe: 'Lua Superior #5',
    ataque: 7,
    defesa: 7
}

let rand = 0
let contador = 0
let indice = 0
let cards = [rengoku, tomioka, obanai, sanemi, mitsuri, gyumei, tokito, uzui, shinobu, dakiGyutaro, kaigaku, kokushibou, hantengu, gyokku, douma, nakime, akaza];

let baralhoPlayer = []
let cartaSelecionada = [];
let cartaComp = []
baralhoPlayer = [...cards]
baralhoComp = [...cards]
cartaSelecionada = baralhoPlayer.sort(function () { return 0.5 - Math.random() });
cartaComp = baralhoComp.sort(function () { return 0.5 - Math.random() });
let player = baralhoPlayer.length
let comp = baralhoComp.length


function padraoCard() {
    deckComp.setAttribute('src', layoutDaCarta.imagem);
    image.setAttribute('src', layoutDaCarta.imagem);
    imageComp.setAttribute('src', layoutDaCarta.imagem);
    cartasPlayer.innerHTML = `Player: ${baralhoPlayer.length} cartas`
    cartascomp.innerHTML = `Comp: ${baralhoComp.length} cartas`

}


function padraoCardComp() {
    cartaComp = layoutDaCarta
    imageComp.setAttribute('src', layoutDaCarta.imagem);
}

function atualizarPlacar() {
    cartasPlayer.innerHTML = `Player: ${baralhoPlayer.length} cartas`
    cartascomp.innerHTML = `Comp: ${baralhoComp.length} cartas`
}

function mostrarCardPlayer() {
    image.setAttribute('src', baralhoPlayer[indice].imagem);
}

function mostrarCardComp() {
    imageComp.setAttribute('src', baralhoComp[rand].imagem);
    
}

function habilitarDeck() {
    let deck = document.getElementById('deck-player').setAttribute('onclick', "comprar()")
    deck
}

function habilitardefeza() {
    let defeza = document.getElementById('btn-defender').setAttribute('onclick', "defender()")
    defeza = document.getElementById('btn-defender').setAttribute('style', 'background-color:green')
    defeza
    
}

function habilitarAtaque() {
    let ataque = document.getElementById('btn-atacar').setAttribute('onclick', "atacar()")
    ataque = document.getElementById('btn-atacar').setAttribute('style', 'background-color:green')
    ataque
    
}

function desabilitarAtaqueDefeza() {
    let ataque = document.getElementById('btn-atacar').setAttribute('onclick', '')
    ataque = document.getElementById('btn-atacar').setAttribute('style', 'background-color:red')
    ataque
    
    let defeza = document.getElementById('btn-defender').setAttribute('onclick', '')
    defeza = document.getElementById('btn-defender').setAttribute('style', 'background-color:red')
    defeza
    
}

function comprar() {
    let deck = document.getElementById('deck-player').setAttribute('onclick', "")
    deck
    padraoCardComp()
    contador++
    if (player !== 0) {
        cartaSelecionada = baralhoPlayer[indice]
        mostrarCardPlayer()
        habilitarAtaque()
        habilitardefeza()
        mensagem.innerHTML = ''
    } else if(baralhoComp,length === 0){    
        alert('Parabéns você ganhou')  
    
    } else if(baralhoPlayer.length === 0){    
        alert('Que pena você perdeu') 
    }
}

function atacar() {
    rand
    cartaComp = baralhoComp[rand]
    mostrarCardComp()
    desabilitarAtaqueDefeza()
    setTimeout(() => {
        if (cartaSelecionada.ataque > cartaComp.ataque) {
            baralhoPlayer.push(baralhoPlayer[0])
            baralhoPlayer.splice(0, 1)
            baralhoPlayer.push(baralhoComp[rand])
            baralhoComp.splice(0, 1)
            mensagem.innerHTML = 'voce ganhou'
            atualizarPlacar()
        } else if (cartaSelecionada.ataque === cartaComp.ataque) {
            baralhoPlayer.push(baralhoPlayer[0])
            baralhoPlayer.splice(0, 1)
            baralhoComp.push(baralhoComp[0])
            baralhoComp.splice(0, 1)
            mensagem.innerHTML = 'empatou'
        } else if (cartaSelecionada.ataque < cartaComp.ataque) {
            baralhoComp.push(baralhoComp[0])
            baralhoComp.splice(0,1)
            baralhoComp.push(baralhoPlayer[0])
            baralhoPlayer.splice(0, 1)
            mensagem.innerHTML = 'voce peerdeu'
            atualizarPlacar()
        }
        else {
            return
        }

    }, 200);

    habilitarDeck()
}

function defender() {
    rand
    cartaComp = baralhoComp[rand]
    mostrarCardComp()
    desabilitarAtaqueDefeza()
    setTimeout(() => {
        if (cartaSelecionada.defesa > cartaComp.defesa) {
            baralhoPlayer.push(baralhoPlayer[0])
            baralhoPlayer.splice(0, 1)
            baralhoPlayer.push(baralhoComp[rand])
            baralhoComp.splice(0, 1)
            mensagem.innerHTML = 'voce ganhou'
            atualizarPlacar()
        } else if (cartaSelecionada.defesa === cartaComp.defesa) {
            baralhoPlayer.push(baralhoPlayer[0])
            baralhoPlayer.splice(0, 1)
            baralhoComp.push(baralhoComp[0])
            baralhoComp.splice(0, 1)
            mensagem.innerHTML = 'empatou'
        } else if (cartaSelecionada.defesa < cartaComp.defesa) {
            baralhoComp.push(baralhoComp[0])
            baralhoComp.splice(0,1)
            baralhoComp.push(baralhoPlayer[0])
            baralhoPlayer.splice(0, 1)
            mensagem.innerHTML = 'voce peerdeu'
            atualizarPlacar()
        }
        else {
            return
        }

    }, 200);

    habilitarDeck()
}

function render() {
    padraoCard()
    desabilitarAtaqueDefeza()
}

render()