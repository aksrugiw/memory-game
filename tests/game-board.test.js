import { GameBoard } from '../scripts/game-board';

describe('GameBoard', () => {
  test('create object correctly', () => {
    const gameBoard = new GameBoard({ container: document.body, cardsContent: [] });

    expect(gameBoard.config.container).toBe(document.body);
  });

  test('render correctly board', () => {
    const gameBoard = new GameBoard({ container: document.body });

    gameBoard.render();

    expect(document.body.innerHTML).toContain('<div class="board">');
  });

  test('render doubled size card array in board', () => {
    const testArray = Array(6);
    const gameBoard = new GameBoard({ container: document.body, cardsContent: testArray });

    gameBoard.render();

    const cards = document.querySelectorAll('.card');

    expect(cards.length).toBe(testArray.length * 2);
  });
});
