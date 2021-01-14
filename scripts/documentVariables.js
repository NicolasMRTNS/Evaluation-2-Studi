/**
 * Buttons to play the game
 */
const newGameButton = document.getElementById('startGame');
const rollDice = document.getElementById('rollDice');
const holdScore = document.getElementById('hold');

/**
 * Variables for players names
 */
let player1Name = document.getElementById('firstPlayerName');
let player2Name = document.getElementById('secondPlayerName');

/**
 * Variables for players scores
 */
let firstPlayerGlobalScore = document.getElementById('firstPlayerGlobalScore');
let firstPlayerCurrentScore = document.getElementById(
  'firstPlayerCurrentScore'
);
let secondPlayerGlobalScore = document.getElementById(
  'secondPlayerGlobalScore'
);
let secondPlayerCurrentScore = document.getElementById(
  'secondPlayerCurrentScore'
);

/**
 * Die face control
 */
let dieFace = document.getElementById('dieFace');

/**
 * HTML for die faces
 */
const sixDieFaces = [
  `<div class="dice first-face"><span class="dot"></span></div>`,
  `<div class="dice second-face"><span class="dot"></span><span class="dot"></span></div>`,
  `<div class="dice third-face"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>`,
  `<div class="dice fourth-face"><div class="column"><span class="dot"></span><span class="dot"></span></div><div class="column"><span class="dot"></span><span class="dot"></span></div></div>`,
  `<div class="dice fifth-face"><div class="column"><span class="dot"></span><span class="dot"></span></div><div class="column"><span class="dot"></span></div><div class="column"><span class="dot"></span><span class="dot"></span></div></div>`,
  `<div class="dice fourth-face"><div class="column"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div><div class="column"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div></div>`,
];
