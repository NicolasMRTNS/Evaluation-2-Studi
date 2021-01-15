/**
 * Variables to play the game
 */
let activePlayer;
let gamePlaying = false;
let currentScore = 0;
let globalScore = 0;

/**
 * Objets to represent players
 */
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
  player1Name.innerHTML = prompt(
    'Choose a name for the first player (if the name is longer than 9 characters, it will get cut up)'
  ).slice(0, 9);
  player2Name.innerHTML = prompt(
    'Choose a name for the second player (if the name is longer than 9 characters, it will get cut up)'
  ).slice(0, 9);
  activePlayer = player1;
  firstPlayerTurn.classList.add('player-turn');
  playerTurnBgColor.classList.add('player-1-turn');
  gamePlaying = true;
  firstPlayerCurrentScore.textContent = 0;
  secondPlayerCurrentScore.textContent = 0;
  firstPlayerGlobalScore.textContent = 0;
  secondPlayerGlobalScore.textContent = 0;
  player1.winner = false;
  player2.winner = false;
  presentModal();
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
  if (activePlayer === player1) {
    activePlayer = player2;
    secondPlayerTurn.classList.add('player-turn');
    firstPlayerTurn.classList.remove('player-turn');
    playerTurnBgColor.classList.add('player-2-turn');
    playerTurnBgColor.classList.remove('player-1-turn');
  } else {
    activePlayer = player1;
    firstPlayerTurn.classList.add('player-turn');
    secondPlayerTurn.classList.remove('player-turn');
    playerTurnBgColor.classList.add('player-1-turn');
    playerTurnBgColor.classList.remove('player-2-turn');
  }
};
