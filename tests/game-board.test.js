import { GameBoard } from '../scripts/game-board';

describe('GameBoard', () => {
  test('create object correctly', () => {
    const gameBoard = new GameBoard({ container: document.body });

    expect(gameBoard.config.container).toBe(document.body);
  });

  test('render correctly board', () => {
    const gameBoard = new GameBoard({ container: document.body });

    gameBoard.render();

    expect(document.body.innerHTML).toContain('<div class="board">');
  });

  test('render 6 * 6 card elements in board', () => {
    const gameBoard = new GameBoard({ container: document.body, size: 6 });

    gameBoard.render();

    const cards = document.querySelectorAll('.card');

    expect(cards.length).toBe(6 * 6);
  });

  test('display error message when cannot create board', () => {
    const gameBoard = new GameBoard({ container: document.body });

    gameBoard.render();

    expect(document.body.innerHTML).toContain('<p class="error"></p>');
  });

  test('display success message after finish game', () => {
    const gameBoard = new GameBoard({ container: document.body });

    gameBoard.render();
    gameBoard.finish();

    expect(document.body.innerHTML).toContain('<p class="success"></p>');
  });

  test('display game time after finish game ', () => {
    const gameBoard = new GameBoard();
    const time = '30s';

    gameBoard.render();
    gameBoard.finish(time);
    const displayTime = document.querySelector('.game-time');

    expect(displayTime.innerHTML).toBe('time');
  });
});
