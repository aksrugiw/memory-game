import { GameBoard } from './game-board.js';
import { MemoryGame } from './memory-game.js';

function main() {
  const count = 0;
  const container = document.querySelector('.main');
  const gameBoard = new GameBoard({ container, size: 5 });
  gameBoard.render();
  const cards = document.querySelectorAll('.card');
  const memoryGame = new MemoryGame({ cards, count });
  memoryGame.setupClickEvents();
}

window.addEventListener('load', main);
