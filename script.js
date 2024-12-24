const playerScoreEl = document.getElementById("player-score");
const enemyScoreEl = document.getElementById("enemy-score");
const playerPokemonEl = document.getElementById("player-pokemon");
const enemyPokemonEl = document.getElementById("enemy-pokemon");
const resultEl = document.getElementById("result");

let playerScore = 8;
let enemyScore = 8;

const types = ["fire", "water", "grass"];
const typeIcons = { fire: "🔥", water: "💧", grass: "🌿" };

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)];
}

function play(playerChoice) {
    const enemyChoice = getRandomType();
    playerPokemonEl.textContent = `Player Pokémon: ${typeIcons[playerChoice]}`;
    enemyPokemonEl.textContent = `Enemy Pokémon: ${typeIcons[enemyChoice]}`;

    if (playerChoice === enemyChoice) {
        resultEl.textContent = "It's a tie!";
    } else if (
        (playerChoice === "fire" && enemyChoice === "grass") ||
        (playerChoice === "water" && enemyChoice === "fire") ||
        (playerChoice === "grass" && enemyChoice === "water")
    ) {
        enemyScore--;
        resultEl.textContent = "You win this round!";
    } else {
        playerScore--;
        resultEl.textContent = "You lose this round!";
    }

    updateScores();
}

function updateScores() {
    playerScoreEl.textContent = `Player: ${playerScore}`;
    enemyScoreEl.textContent = `Enemy: ${enemyScore}`;

    if (playerScore <= 0) {
        resultEl.textContent = "Enemy wins the game!";
        resetGame();
    } else if (enemyScore <= 0) {
        resultEl.textContent = "You win the game!";
        resetGame();
    }
}

function resetGame() {
    playerScore = 8;
    enemyScore = 8;
    setTimeout(() => {
        playerScoreEl.textContent = `Player: ${playerScore}`;
        enemyScoreEl.textContent = `Enemy: ${enemyScore}`;
        resultEl.textContent = "";
    }, 2000);
}
