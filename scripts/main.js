import { GameBoard } from './game-board.js';
import { MemoryGame } from './memory-game.js';

const ANIMALS = ['fox', 'rabbit', 'koala'];

function main() {
  const count = 0;
  const container = document.querySelector('.main');
  const gameBoard = new GameBoard({ container, cardsContent: ANIMALS });
  gameBoard.render();
  const cards = document.querySelectorAll('.card');
  const memoryGame = new MemoryGame({ cards, count });
  memoryGame.setupClickEvents();
}

window.addEventListener('load', main);
