/**
 * Variables to play the game
 */
let activePlayer;
let gamePlaying = false;

/**
 * Initialisation of a game
 * Setting players names + scores to 0
 */
function startNewGame() {
  player1Name.innerHTML = prompt('Player 1 name');
  player2Name.innerHTML = prompt('Player 2 name');
  firstPlayerCurrentScore.innerHTML = '0';
  secondPlayerCurrentScore.innerHTML = '0';
  firstPlayerGlobalScore.innerHTML = '0';
  secondPlayerGlobalScore.innerHTML = '0';
  activePlayer = 0;
  gamePlaying = true;
  console.log(activePlayer, gamePlaying);
}

newGameButton.addEventListener('click', startNewGame);
