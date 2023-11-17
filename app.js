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

const gameStartBtn = document.querySelector('.game-start')
const gameResettBtn = document.querySelector('.game-reset')
const playerOneScore = document.querySelector('.p1-score')
const playerTwoScore = document.querySelector('.p2-score')
const playerOneThrow = document.querySelector('.player1-throw')
const playerTwoThrow = document.querySelector('.player2-throw')
const playerOneMove = document.querySelector('.player1-throw__move')
const playerTwoMove = document.querySelector('.player2-throw__move')

const gamePlay = function () {
  let p1Score = 0
  let p2Score = 0
  playerOneThrow.classList.add('playing')
  playerTwoThrow.classList.add('playing')
  setTimeout(function () {
    let oneLastMove = (playerOneMove.src =
      player1Moves[Math.floor(Math.random() * 3)])
    let twoLastMove = (playerTwoMove.src =
      player2Moves[Math.floor(Math.random() * 3)])
    console.log(oneLastMove)
    console.log(twoLastMove)
		p1Score++
		playerOneScore.textContent = p1Score
  }, 1500)
}

const gameReady = function () {
  playerOneThrow.classList.remove('playing')
  playerTwoThrow.classList.remove('playing')
  console.log(`playing class is gone`)
}

gameStartBtn.addEventListener('click', () => {
  gamePlay()
  // setTimeout(gameReady, 2500)
})
