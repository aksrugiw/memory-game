import { MemoryGame } from '../scripts/memory-game.js';
import { GameBoard } from '../scripts/game-board.js';
import { Card } from '../scripts/card.js';

let memoryGame, cards, gameBoard;
beforeAll(() => {
  gameBoard = new GameBoard({ container: document.body, size: 2 });
  gameBoard.render();
  cards = document.querySelectorAll('.card');
  memoryGame = new MemoryGame({ cards, count: 0 });
});

describe('MemoryGame', () => {
  test('create object', () => {
    const memoryGame = new MemoryGame({ count: 1 });

    expect(memoryGame.config.count).toBe(1);
  });

  test('turn over card after click', () => {
    memoryGame.setupClickEvents();

    cards[0].click();

    expect(cards[0].classList).toContain('card-on');
  });

  test('disable all cards when second card clicked', () => {
    memoryGame.setupClickEvents();

    cards[0].click();
    cards[1].click();

    expect(cards[0].classList).toContain('disabled');
  });

  test('enable all cards after one second', () => {});

  test('if cards not match turn them back after one second', () => {
    const cards = [
      new Card({ container: document.body, content: 'test1' }),
      new Card({ container: document.body, content: 'test2' }),
    ];
    const memoryGame = new MemoryGame({ cards });
    const cardsElem = document.querySelectorAll('.card');

    cardsElem[0].click();
    cardsElem[1].click();

    const clickedCards = document.querySelectorAll('.card-on');

    expect(clickedCards).not.toBeDefined();
  });

  test('if cards match keep them in front of', () => {});
});
