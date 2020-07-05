import { GameBoard } from './game-board.js';
import { MemoryGame } from './memory-game.js';

const ANIMALS = ['fox', 'bat', 'koala', 'bird', 'camel', 'cat', 'flamingo', 'octopus'];
const MUSIC = ['violin', 'harp', 'panpipes', 'guitar', 'sax', 'flute', 'maracas', 'drum'];
const CINEMA = ['camera', 'tickets', 'film-reel', 'popcorn', 'oscar', 'director', 'curtain', 'cinema'];
let chosenTheme = 'animals';
const themeArrays = {
  animals: ANIMALS,
  music: MUSIC,
  cinema: CINEMA,
};

function main() {
  const container = document.querySelector('.main');
  const gameBoard = new GameBoard({ container, cardsContent: themeArrays[chosenTheme] });
  gameBoard.render();
  const cards = document.querySelectorAll('.card');
  const memoryGame = new MemoryGame({ cards });
  memoryGame.setupClickEvents();
}

function startGame() {
  const overlay = document.querySelector('.overlay');
  const button = document.querySelector('.modal-button');
  const themes = document.querySelectorAll('.theme');

  themes.forEach((theme) => {
    theme.addEventListener('click', (e) => chooseTheme(e));
  });

  function chooseTheme(e) {
    themes.forEach((theme) => {
      theme.classList.remove('chosen');
    });
    e.target.parentElement.classList.toggle('chosen');
    chosenTheme = e.target.parentElement.dataset.theme;
  }

  button.addEventListener('click', () => {
    overlay.classList.remove('show');
    main();
  });
}

window.addEventListener('load', startGame);
