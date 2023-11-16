'use strict'

const gameStartBtn = document.querySelector('.game-start')
const gameResettBtn = document.querySelector('.game-reset')
const playerOneRock = document.querySelector('#rock')
const playerOnePaper = document.querySelector('#paper')
const playerOneScissor = document.querySelector('#scissor')
const playerTwoRock = document.querySelector('#rock2')
const playerTwoPaper = document.querySelector('#paper2')
const playerTwoScissor = document.querySelector('#scissor2')
const playerOneScore = document.querySelector('.p1-score')
const playerTwoScore = document.querySelector('.p2-score')
const playerOneThrow = document.querySelector('.player1-throw')
const playerTwoThrow = document.querySelector('.player2-throw')

function gamePlay() {
	playerOneThrow.classList.toggle('playing')
	playerTwoThrow.classList.toggle('playing')
}

gameStartBtn.addEventListener('click', gamePlay)