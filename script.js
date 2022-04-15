'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
//Staring conditions
score0El.textContent = 0;
score1El.textContent = 0;

let scores = [0, 0];
diceEl.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;

//rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generating random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1; // Generates random number between 1 and 6
  //2. Display Dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //3. Check for rolled 1 : if true switch to the next player
  if (dice !== 1) {
    //add dice to current score
    currentScore += dice; //currentScore = currentScore + dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //Switch to the next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0; // if active player is 0, change it to 1 else change it to 0
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
