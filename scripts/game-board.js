import { Card } from './card.js';

const IMAGE = 'https://cdn.icon-icons.com/icons2/2107/PNG/64/file_type_js_official_icon_130509.png';

export class GameBoard {
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
        const card = new Card({ container: row, backImage: IMAGE, content: 'test' });
        card.render();
      }
    });
  }
}
