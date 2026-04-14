//personagens

const player1 = {
    NOME: "Homem-aranha",
    STRENGTH: 5,
    AGILIDADE: 7,
    ARMAS:  3,
    DEFESA: 6,
    PONTOS:  0,




};

const player2 = {
    NOME: "Duende Verde",
    STRENGTH: 7,
    AGILIDADE: 2,
    ARMAS:  6,
    DEFESA: 5,
    PONTOS: 0,




};

const player3 = {
    NOME: "Electro",
    STRENGTH: 7,
    AGILIDADE: 7,
    ARMAS:  4,
    DEFESA: 2,
    PONTOS: 0,




};

const player4 = {
    NOME: "Lagarto",
    STRENGTH: 6,
    AGILIDADE: 4,
    ARMAS:  2,
    DEFESA: 7,
    PONTOS: 0,




};

const player5 = {
    NOME: "Dr. Octopus",
    STRENGTH: 5,
    AGILIDADE: 3,
    ARMAS:  7,
    DEFESA: 5,
    PONTOS: 0,




};


const player6= {
    NOME: "Homem-Areia",
    STRENGTH: 6,
    AGILIDADE: 4,
    ARMAS:  5,
    DEFESA: 5,
    PONTOS: 0,


}

async function getrandomblock() {
    let random = Math.random()
    let result

    switch (true) {
        case random < 0.25:
            result = "TÁTICO"
            break;
        case random < 0.50:
            result = "VELOZ"
            break;
    }
}

async function rolldice() {
    return Math.floor(Math.random() * 6) + 1;
}
(async function main() {
    console.log(
        `${player1.NOME} em ação! 🕸️ `
    )
});

async function playfightengine(character1, character2) {

    for(let round = 1; round <= 5; round++) {
        console.log(`Confronto está na fase ${round}!`)

        // sorteio
        let block = await getrandomblock()
    }
}

(async function main () {
    await playfightengine(player1, player2)
})

