'use strict'

const gameStartBtn = document.querySelector('.game-start')
const gameResettBtn = document.querySelector('.game-reset')
const playerOneScore = document.querySelector('.p1-score')
const playerTwoScore = document.querySelector('.p2-score')
const playerOneThrow = document.querySelector('.player1-throw')
const playerTwoThrow = document.querySelector('.player2-throw')

function gamePlay() {
  playerOneThrow.classList.toggle('playing')
  playerTwoThrow.classList.toggle('playing')
}

const throws = ['url']

gameStartBtn.addEventListener('click', gamePlay)
