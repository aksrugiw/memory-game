import { Card } from './card.js';

export class GameBoard {
  constructor(settings) {
    this.config = {};

    this.contentArr = [];
    this.size = settings.cardsContent ? settings.cardsContent.length : 0;
    Object.assign(this.config, settings);
  }

  render() {
    this.config.container.innerHTML = `<div class="board"></div>`;
    const board = document.querySelector('.board');
    if (this.size || this.config.cardsContent) {
      this.renderCards(board);
    }
  }

  renderCards(board) {
    const shuffledArray = this.shuffleArray(this.doubleArray(this.config.cardsContent));
    for (let i = 0; i < this.size * 2; i++) {
      const card = new Card({ container: board, content: shuffledArray[i] });
      card.render();
    }
  }

  doubleArray(array) {
    return [...array, ...array];
  }

  shuffleArray(array) {
    let shuffledArray = [...array];
    for (let size = shuffledArray.length, i = size - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
    }
    return shuffledArray;
  }
}
