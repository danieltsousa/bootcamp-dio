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


// ... (mantenha a definição dos objetos player1 até player8 que você já criou)

async function getRandomBlock() {
    let random = Math.random();
    switch (true) {
        case random < 0.25: return "TÁTICA";
        case random < 0.50: return "VELOZ";
        case random < 0.75: return "DIRETA";
        default: return "CONTRA-ATAQUE";
    }
}

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} rolou o dado de ${block}: ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function playFightEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`\n--- Rodada ${round} ---`);

        let block = await getRandomBlock();
        let dice1 = await rollDice();
        let dice2 = await rollDice();
        
        let score1 = 0;
        let score2 = 0;

        if (block === "TÁTICA") {
            score1 = dice1 + character1.ARMAS;
            score2 = dice2 + character2.ARMAS;
            await logRollResult(character1.NOME, "Armas", dice1, character1.ARMAS);
            await logRollResult(character2.NOME, "Armas", dice2, character2.ARMAS);
        }

        if (block === "VELOZ") {
            score1 = dice1 + character1.AGILIDADE;
            score2 = dice2 + character2.AGILIDADE;
            await logRollResult(character1.NOME, "Agilidade", dice1, character1.AGILIDADE);
            await logRollResult(character2.NOME, "Agilidade", dice2, character2.AGILIDADE);
        }

        if (block === "DIRETA") {
            console.log(`🥊 BLOCO: DIRETA (Ataque de ${character1.NOME})`);
            score1 = dice1 + character1.STRENGTH; // Ataque do P1
            score2 = dice2 + character2.DEFESA;   // Defesa do P2
            await logRollResult(character1.NOME, "Ataque (Força)", dice1, character1.STRENGTH);
            await logRollResult(character2.NOME, "Defesa", dice2, character2.DEFESA);
        }

        if (block === "CONTRA-ATAQUE") {
            console.log(`⚡ BLOCO: CONTRA-ATAQUE (Ataque de ${character2.NOME})`);
            score1 = dice1 + character1.DEFESA;   // Defesa do P1
            score2 = dice2 + character2.STRENGTH; // Ataque do P2
            await logRollResult(character1.NOME, "Defesa", dice1, character1.DEFESA);
            await logRollResult(character2.NOME, "Ataque (Força)", dice2, character2.STRENGTH);
        }

        // Verificação de vencedor do Round
        if (score1 > score2) {
            console.log(`⭐ ${character1.NOME} venceu o confronto!`);
            character1.PONTOS++;
        } else if (score2 > score1) {
            console.log(`⭐ ${character2.NOME} venceu o confronto!`);
            character2.PONTOS++;
        } else {
            console.log("🤝 Empate nesta rodada!");
        }
    }

    console.log("\n_____________________________________________");
    console.log(`PLACAR FINAL: ${character1.NOME} ${character1.PONTOS} X ${character2.PONTOS} ${character2.NOME}`);
}

// Inicialização
(async function main() {
    console.log(`🥊 Iniciando luta entre ${player1.NOME} e ${player2.NOME}!\n`);
    await playFightEngine(player1, player2);
})();

