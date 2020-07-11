import { MemoryGame } from '../scripts/memory-game.js';
import { GameBoard } from '../scripts/game-board.js';
import { Card } from '../scripts/card.js';

let memoryGame, cards, gameBoard;
beforeAll(() => {
  gameBoard = new GameBoard({ container: document.body, cardsContent: ['foo', 'bar'] });
  gameBoard.render();
  cards = document.querySelectorAll('.card');
  memoryGame = new MemoryGame({ cards });
});

describe('MemoryGame', () => {
  test('create object', () => {
    const memoryGame = new MemoryGame({ cards: [1] });

    expect(memoryGame.config.cards.length).toBe(1);
  });

  test('turn over card after click', () => {
    memoryGame.setupClickEvents();

    cards[0].click();

    expect(cards[0].classList).toContain('card-on');
  });

  test('disable all cards when second card clicked', () => {
    memoryGame.setupClickEvents();
    memoryGame.disableCards = jest.fn();

    cards[0].click();
    cards[1].click();

    expect(memoryGame.disableCards).toHaveBeenCalled();
  });

  test('enable all cards when second card clicked', () => {
    memoryGame.setupClickEvents();
    memoryGame.enableCards = jest.fn();

    cards[0].click();
    cards[1].click();

    expect(memoryGame.enableCards).toHaveBeenCalled();
  });

  test('if cards match keep them in front of', () => {
    const cardsContent = ['foo', 'foo'];
    document.body.innerHTML = '';
    const gameBoard = new GameBoard({ container: document.body, cardsContent });
    gameBoard.render();
    const cards = document.querySelectorAll('.card');
    const memoryGame = new MemoryGame({ cards });
    memoryGame.setupClickEvents();

    cards[0].click();
    cards[1].click();

    const matchedCards = document.querySelectorAll('.card-keep');

    expect(matchedCards.length).toBe(2);
  });

  test('display success message after finish game', () => {
    document.body.innerHTML = `<main class="main"></main>`;
    const main = document.querySelector('.main');
    const gameBoard = new GameBoard({ container: main, cardsContent: [] });

    gameBoard.render();
    memoryGame.finishGame();

    expect(document.body.innerHTML).toContain('Congratulation!');
  });

  test('display game time after finish game ', () => {
    const gameBoard = new GameBoard({ container: document.body, cardsContent: [] });
    const time = '30s';

    gameBoard.render();
    memoryGame.finish(time);
    const displayTime = document.querySelector('.game-time');

    expect(displayTime.innerHTML).toBe('time');
  });
});
