/**
 * Variables to play the game
 */
let activePlayer;
let gamePlaying = false;
let currentScore = 0;
let player1 = {
  currentScore: firstPlayerCurrentScore,
  globalScore: firstPlayerGlobalScore,
};
let player2 = {
  currentScore: secondPlayerCurrentScore,
  globalScore: secondPlayerGlobalScore,
};

/**
 * Initialisation of a game
 * Setting players names + scores to 0
 */
const startNewGame = () => {
  player1Name.innerHTML = prompt('Player 1 name');
  player2Name.innerHTML = prompt('Player 2 name');
  firstPlayerCurrentScore.innerHTML = '0';
  secondPlayerCurrentScore.innerHTML = '0';
  firstPlayerGlobalScore.innerHTML = '0';
  secondPlayerGlobalScore.innerHTML = '0';
  activePlayer = player1;
  gamePlaying = true;
};

newGameButton.addEventListener('click', startNewGame);

/**
 * Die roll
 */
const rollTheDie = () => {
  if (gamePlaying) {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    dieFace.innerHTML = sixDieFaces[randomNumber - 1];
    if (randomNumber !== 1) {
      currentScore += randomNumber;
      activePlayer.currentScore.textContent = currentScore;
    } else {
      currentScore = 0;
      activePlayer.currentScore.textContent = currentScore;
    }
  }
};

rollDice.addEventListener('click', rollTheDie);
