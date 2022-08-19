let image = document.getElementById('image');
let imageComp = document.getElementById('image-comp');
document.getElementById('btn-atacar')
document.getElementById('deck-player')
let deckComp = document.getElementById('deck-comp');
document.getElementById('btn-defender')
let cartasPlayer = document.getElementById('cartas-player')
let cartascomp = document.getElementById('cartas-comp')

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

let indice = 0
let cards = [layoutDaCarta, rengoku, tomioka, obanai, sanemi, mitsuri, gyumei, tokito, uzui, shinobu, dakiGyutaro, kaigaku, kokushibou, hantengu, gyokku, douma, nakime, akaza];

let cartaSelecionada = [];
let cartaComp = []


function padraoCard() {
    cartaSelecionada = cards[0]
    cartaComp = cards[0]
    deckComp.setAttribute('src', cartaSelecionada.imagem);
    image.setAttribute('src', cartaSelecionada.imagem);
    imageComp.setAttribute('src', cartaSelecionada.imagem);
    cartasPlayer.innerHTML = `Player: ${cards.length} cartas`
    cartascomp.innerHTML = `Comp: ${cards.length} cartas`

}

function padraoCardComp() {
    cartaComp = cards[0]
    imageComp.setAttribute('src', cartaSelecionada.imagem);
}


function mostrarCard() {
    image.setAttribute('src', cartaSelecionada.imagem);
    imageComp.setAttribute('src', cartaComp.imagem);
}

function habilitarDeck() {
    let deck = document.getElementById('deck-player').setAttribute('onclick', "comprar()")
    deck
}

function habilitardefeza() {
    let defeza = document.getElementById('btn-defender').setAttribute('onclick', "defender()")
    defeza

}

function habilitarAtaque() {
    let ataque = document.getElementById('btn-atacar').setAttribute('onclick', "atacar()")
    ataque

}

function desabilitarAtaqueDefeza(){
    let ataque = document.getElementById('btn-atacar').setAttribute('onclick', 'disabled')
    ataque

    let defeza = document.getElementById('btn-defender').setAttribute('onclick', 'disabled')
    defeza

}

function comprar() {
    let deck = document.getElementById('deck-player').setAttribute('onclick', "disabled")
    deck
    padraoCardComp()
    indice++
    if (indice < cards.length) {
        cartaSelecionada = cards[indice]
        mostrarCard()
        habilitarAtaque()
        habilitardefeza()

    }
}

function atacar() {
    rand = Math.floor(Math.random() * cards.length + 1)
    cartaComp = cards[rand]
    mostrarCard()
    desabilitarAtaqueDefeza()
    setTimeout(() => {
        if (cartaSelecionada.ataque > cartaComp.ataque) {
            alert('voce ganhou')
        } else if (cartaSelecionada.ataque === cartaComp.ataque) {
            alert('empatou')
        } else {
            alert('voce peerdeu')
        }

    }, 2000);

    habilitarDeck()
}

function defender() {
    rand = Math.floor(Math.random() * cards.length + 1)
    cartaComp = cards[rand]
    mostrarCard()
    desabilitarAtaqueDefeza()
    setTimeout(() => {
        if (cartaSelecionada.defesa > cartaComp.defesa) {
            alert('voce ganhou')
        } else if (cartaSelecionada.defesa === cartaComp.defesa) {
            alert('empatou')
        } else {
            alert('voce peerdeu')
        }

    }, 1000);

    habilitarDeck()
}

function render() {
    padraoCard()
    desabilitarAtaqueDefeza()
}

render()