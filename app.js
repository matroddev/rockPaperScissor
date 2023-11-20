'use strict'

const player1Moves = [
  './assets/whiteRock.png',
  './assets/whitePaper.png',
  './assets/whiteScissor.png',
]

const player2Moves = [
  './assets/blackRock.png',
  './assets/blackPaper.png',
  './assets/blackScissor.png',
]

const wRock = player1Moves[0]
const wPaper = player1Moves[1]
const wScissor = player1Moves[2]

const bRock = player2Moves[0]
const bPaper = player2Moves[1]
const bScissor = player2Moves[2]

const gameStartBtn = document.querySelector('.game-start')
const gameResettBtn = document.querySelector('.game-reset')
const playerOneThrow = document.querySelector('.player1-throw')
const playerTwoThrow = document.querySelector('.player2-throw')
const playerOneMove = document.querySelector('.player1-throw__move')
const playerTwoMove = document.querySelector('.player2-throw__move')
const winner = document.querySelector('.game-title')

const gamePlay = function () {
  playerOneThrow.classList.add('playing')
  playerTwoThrow.classList.add('playing')
  setTimeout(function () {
    let p1Move = (playerOneMove.src =
      player1Moves[Math.floor(Math.random() * 3)])
    let p2Move = (playerTwoMove.src =
      player2Moves[Math.floor(Math.random() * 3)])
    if (p1Move === wRock && p2Move === bScissor) {
      winner.textContent = 'Player One Wins!'
    } else if (p1Move === wRock && p2Move === bPaper) {
      winner.textContent = 'Player Two Wins!'
    } else if (p1Move === wPaper && p2Move === bScissor) {
      winner.textContent = 'Player Two Wins!'
    } else if (p1Move === wPaper && p2Move === bRock) {
      winner.textContent = 'Player One Wins!'
    } else if (p2Move === bRock && p1Move === wScissor) {
      winner.textContent = 'Player Two Wins!'
    } else if (p2Move === bPaper && p1Move === wScissor) {
      winner.textContent = 'Player One Wins!'
    } else if (p1Move === wRock && p2Move === bScissor) {
      winner.textContent = 'Player One Wins!'
    } else {
      winner.textContent = 'It is a Draw!'
    }
		gameResettBtn.classList.add('visible')
		gameStartBtn.classList.add('invisible')
  }, 1500)
}
const gameReady = function () {
  playerOneThrow.classList.remove('playing')
  playerTwoThrow.classList.remove('playing')
  playerOneMove.src = player1Moves[0]
  playerTwoMove.src = player2Moves[0]
  winner.textContent = 'Rock Paper Scissors'
}

gameStartBtn.addEventListener('click', () => {
  gamePlay()
})

gameResettBtn.addEventListener('click', () => {
	gameReady()
	gameResettBtn.classList.remove('visible')
	gameStartBtn.classList.remove('invisible')
})
