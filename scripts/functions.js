/**
 * Variables to play the game
 */
let activePlayer;
let gamePlaying = false;
let currentScore = 0;
let globalScore = 0;
let player1 = {
  name: player1Name,
  currentScore: firstPlayerCurrentScore,
  globalScore: firstPlayerGlobalScore,
  winner: false,
};
let player2 = {
  name: player2Name,
  currentScore: secondPlayerCurrentScore,
  globalScore: secondPlayerGlobalScore,
  winner: false,
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
  player1.winner = false;
  player2.winner = false;
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
      nextPlayer();
    }
  }
};

rollDice.addEventListener('click', rollTheDie);

/**
 * Hold button
 */
const holdButton = () => {
  if (gamePlaying) {
    activePlayer.globalScore.textContent =
      currentScore + Number(activePlayer.globalScore.textContent);
    if (activePlayer.globalScore.textContent >= 100) {
      activePlayer.winner = true;
      alert(`${activePlayer.name.textContent} is the winner`);
      gamePlaying = false;
    } else {
      currentScore = 0;
      activePlayer.currentScore.textContent = currentScore;
      nextPlayer();
    }
  }
};

holdScore.addEventListener('click', holdButton);

/**
 * Next player function
 */
const nextPlayer = () => {
  activePlayer === player1
    ? (activePlayer = player2)
    : (activePlayer = player1);
};
