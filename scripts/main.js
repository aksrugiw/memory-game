function main() {
  const cards = document.querySelectorAll('.card');
  const count = 0;
  const memoryGame = new MemoryGame({ cards, count });
  memoryGame.setupClickEvents();
}

class MemoryGame {
  constructor(settings) {
    this.config = {};

    Object.assign(this.config, settings);
  }

  setupClickEvents() {
    const self = this;
    this.config.cards.forEach((card) => {
      card.addEventListener('click', (e) => self.flipCard(e));
    });
  }

  flipCard(e) {
    this.config.count++;
    e.target.classList.add('card-flip');
    const flippedCards = document.querySelectorAll('.card-flip');
    if (this.config.count > 1) {
      this.disableCards();
      setTimeout(this.hideCards.bind(this), 1000, flippedCards);
    }
  }

  disableCards() {
    this.config.cards.forEach((card) => {
      card.classList.add('disabled');
    });
  }

  enableCards() {
    this.config.cards.forEach((card) => {
      card.classList.remove('disabled');
    });
  }

  hideCards(flippedCards) {
    flippedCards.forEach((flippedCard) => {
      flippedCard.classList.remove('card-flip');
    });
    this.config.count = 0;
    this.enableCards();
  }
}

window.addEventListener('load', main);
