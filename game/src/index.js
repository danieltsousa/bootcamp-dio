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
    AGILIDADE: 6,
    ARMAS:  5,
    DEFESA: 2,
    PONTOS: 0,




};

const player4 = {
    NOME: "Abutre",
    STRENGTH: 3,
    AGILIDADE: 7,
    ARMAS:  5,
    DEFESA: 5,
    PONTOS: 0,




};

const player5 = {
    NOME: "Dr. Octopus",
    STRENGTH: 4,
    AGILIDADE: 4,
    ARMAS:  6,
    DEFESA: 6,
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

const player7= {
    NOME: "Mysterio",
    STRENGTH: 3,
    AGILIDADE: 7,
    ARMAS:  7,
    DEFESA: 3,
    PONTOS: 0,


}
const player8= {
    NOME: "Kraven",
    STRENGTH: 5,
    AGILIDADE: 7,
    ARMAS:  6,
    DEFESA: 2,
    PONTOS: 0,


}


async function getRandomBlock() {
    let random = Math.random()
    let result

    switch (true) {
        case random < 0.25:
            result = "TÁTICA"
            break;
        case random < 0.50:
            result = "VELOZ"
            break;
        case random < 0.75:
            result = "DIRETA"
            break;
        default:
            result = "CONTRA-ATAQUE"
            break;
    }
    return result
}

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName}  rolou o dado de ${block} ${diceResult} =
        ${attribute} = ${diceResult + attribute} `);
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
//Fase
    for(let round = 1; round <= 5; round++) {
        console.log(`Confronto está na fase ${round}!`)

        // sorteio
        let block = await getrandomblock()

        //rolar dados
        let diceResult1 = await rollDice()
        let diceResult2 = await rollDice()
        
        let totalTestSkill1 = 0
        let totalTestSkill2 = 0
        
        if (block === "TÁTICA") {
            totalTestSkill1 = diceResult1 + character1.ARMAS
            totalTestSkill1 = diceResult1 + character1.ARMAS
            await  logRollResult(
                character1.NOME,
                 "Armas", 
                 diceResult1,
                character1.ARMAS);

             await  logRollResult(
                character2.NOME,
                 "Armas", 
                 diceResult2,
                character2.ARMAS);
        }

            
        if (block === "VELOZ") {
            totalTestSkill1 = diceResult1 + character1.AGILIDADE
            totalTestSkill2 = diceResult2 + character2.AGILIDADE
            await  logRollResult(
                character1.NOME,
                 "Agilidade", 
                 diceResult1,
                character1.AGILIDADE);

             await  logRollResult(
                character2.NOME,
                 "Agilidade", 
                 diceResult2,
                character2.AGILIDADE);
        }


        }
            
        if (block === "DIRETA") {
            totalTestSkill1 = diceResult1 + character1.STRENGTH
            totalTestSkill1 = diceResult2 + character2.STRENGTH
            
            
        }
            
        if (block === "CONTRA-ATAQUE") {
            let powerResult1 = diceResult1 + character1.DEFESA
            let powerResult2 = diceResult2 + character2.DEFESA
            
        }
        if(totalTestSkill1 > totalTestSkill2){
            console.log(`${character1.NOME} marca um ponto!`);
            character1.PONTOS++;
        } else if(totalTestSkill2 > totalTestSkill2){
              console.log(`${character2.NOME} marca um ponto!`);
            character2.PONTOS++;
        }
    }

    console.log("_____________________________________________");


(async function main () {
    await playfightengine(player1, player2)
})

