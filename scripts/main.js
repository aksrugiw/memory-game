import { GameBoard } from './game-board.js';
import { MemoryGame } from './memory-game.js';

const ANIMALS = ['fox', 'bat', 'koala', 'bird', 'camel', 'cat', 'flamingo', 'octopus'];

function main() {
  const container = document.querySelector('.main');
  const gameBoard = new GameBoard({ container, cardsContent: ANIMALS });
  gameBoard.render();
  const cards = document.querySelectorAll('.card');
  const memoryGame = new MemoryGame({ cards });
  memoryGame.setupClickEvents();
}

window.addEventListener('load', main);
