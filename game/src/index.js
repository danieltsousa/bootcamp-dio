const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Lista completa de personagens com seus atributos
const characters = [
  { NOME: "Homem-aranha", STRENGTH: 5, AGILIDADE: 7, ARMAS: 3, DEFESA: 6, PONTOS: 0 },
  { NOME: "Duende Verde", STRENGTH: 7, AGILIDADE: 2, ARMAS: 6, DEFESA: 5, PONTOS: 0 },
  { NOME: "Electro", STRENGTH: 7, AGILIDADE: 6, ARMAS: 5, DEFESA: 2, PONTOS: 0 },
  { NOME: "Abutre", STRENGTH: 3, AGILIDADE: 7, ARMAS: 5, DEFESA: 5, PONTOS: 0 },
  { NOME: "Dr. Octopus", STRENGTH: 4, AGILIDADE: 4, ARMAS: 6, DEFESA: 6, PONTOS: 0 },
  { NOME: "Homem-Areia", STRENGTH: 6, AGILIDADE: 4, ARMAS: 5, DEFESA: 5, PONTOS: 0 },
  { NOME: "Mysterio", STRENGTH: 3, AGILIDADE: 7, ARMAS: 7, DEFESA: 3, PONTOS: 0 },
  { NOME: "Kraven", STRENGTH: 5, AGILIDADE: 7, ARMAS: 6, DEFESA: 2, PONTOS: 0 },
];

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
  const random = Math.random();
  if (random < 0.25) return "TÁTICA";
  if (random < 0.50) return "VELOZ";
  if (random < 0.75) return "DIRETA";
  return "CONTRA-ATAQUE";
}

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(`${characterName} 🎲 rolou ${block}: ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

async function playFightEngine(c1, c2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`\n--- 🥊 Rodada ${round} ---`);
    
    const block = await getRandomBlock();
    console.log(`Bloco Sorteado: 📍 ${block}`);

    const dice1 = await rollDice();
    const dice2 = await rollDice();
    let score1 = 0;
    let score2 = 0;

    switch (block) {
      case "TÁTICA":
        score1 = dice1 + c1.ARMAS;
        score2 = dice2 + c2.ARMAS;
        await logRollResult(c1.NOME, "Armas", dice1, c1.ARMAS);
        await logRollResult(c2.NOME, "Armas", dice2, c2.ARMAS);
        break;
      case "VELOZ":
        score1 = dice1 + c1.AGILIDADE;
        score2 = dice2 + c2.AGILIDADE;
        await logRollResult(c1.NOME, "Agilidade", dice1, c1.AGILIDADE);
        await logRollResult(c2.NOME, "Agilidade", dice2, c2.AGILIDADE);
        break;
      case "DIRETA":
        score1 = dice1 + c1.STRENGTH;
        score2 = dice2 + c2.DEFESA;
        await logRollResult(c1.NOME, "Ataque (Força)", dice1, c1.STRENGTH);
        await logRollResult(c2.NOME, "Defesa", dice2, c2.DEFESA);
        break;
      case "CONTRA-ATAQUE":
        score1 = dice1 + c1.DEFESA;
        score2 = dice2 + c2.STRENGTH;
        await logRollResult(c1.NOME, "Defesa", dice1, c1.DEFESA);
        await logRollResult(c2.NOME, "Ataque (Força)", dice2, c2.STRENGTH);
        break;
    }

    if (score1 > score2) {
      console.log(`⭐ ${c1.NOME} venceu a rodada!`);
      c1.PONTOS++;
    } else if (score2 > score1) {
      console.log(`⭐ ${c2.NOME} venceu a rodada!`);
      c2.PONTOS++;
    } else {
      console.log("🤝 Empate na rodada!");
    }
  }
}

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

(async function main() {
  console.log("===========================================");
  console.log("   BEM-VINDO AO JOGO DE LUTA DO HOMEM-ARANHA! ");
  console.log("===========================================\n");

  // EXIBIÇÃO DA LISTA DE PERSONAGENS
  console.log("PERSONAGENS DISPONÍVEIS:");
  characters.forEach((char, i) => {
    console.log(`${i + 1}. ${char.NOME.padEnd(15)} | Força: ${char.STRENGTH} | Agilidade: ${char.AGILIDADE} | Armas: ${char.ARMAS} | Defesa: ${char.DEFESA}`);
  });
  console.log("-------------------------------------------");

  const p1Idx = await askQuestion("\nEscolha o número do Jogador 1: ");
  const p2Idx = await askQuestion("Escolha o número do Jogador 2: ");

  // Criamos cópias dos objetos para não alterar o array original caso joguem de novo
  const player1 = { ...characters[parseInt(p1Idx) - 1] };
  const player2 = { ...characters[parseInt(p2Idx) - 1] };

  if (!player1.NOME || !player2.NOME) {
    console.log("\n❌ Opção inválida! Por favor, reinicie e escolha um número da lista.");
  } else {
    console.log(`\n🔥 CONFRONTO DEFINIDO: ${player1.NOME} VS ${player2.NOME} 🔥`);
    await playFightEngine(player1, player2);
    
    console.log("\n===========================================");
    console.log(`PLACAR FINAL: ${player1.NOME}: ${player1.PONTOS} | ${player2.NOME}: ${player2.PONTOS}`);
    
    if (player1.PONTOS > player2.PONTOS) {
        console.log(`🏆 VENCEDOR: ${player1.NOME.toUpperCase()}`);
    } else if (player2.PONTOS > player1.PONTOS) {
        console.log(`🏆 VENCEDOR: ${player2.NOME.toUpperCase()}`);
    } else {
        console.log("🏁 EMPATE TÉCNICO!");
    }
    console.log("===========================================");
  }
  rl.close();
})();

