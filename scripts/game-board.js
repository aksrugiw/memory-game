import { Card } from './card.js';

const ANIMALS = ['fox', 'rabbit', 'koala', 'fox', 'rabbit', 'koala'];

export class GameBoard {
  // TODO: Tylko liczby parzyste dla size, dodać wyjątek/error
  constructor(settings) {
    this.config = {};

    Object.assign(this.config, settings);
  }

  render() {
    this.config.container.innerHTML = `<div class="board"></div>`;
    const board = document.querySelector('.board');

    for (let i = 0; i < this.config.size; i++) {
      board.innerHTML += `<div class="card-row"></div>`;
    }

    this.renderCards();
  }
  renderCards() {
    const cardRows = document.querySelectorAll('.card-row');
    cardRows.forEach((row) => {
      for (let i = 0; i < this.config.size; i++) {
        // FIXME: add parameters to create different Cards
        const card = new Card({
          container: row,
          contentImage: `../assets/images/${ANIMALS[i]}.png`,
        });
        card.render();
      }
    });
  }
}
