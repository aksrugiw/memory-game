export class MemoryGame {
  constructor(settings) {
    this.config = {};

    Object.assign(this.config, settings);
  }

  setupClickEvents() {
    const self = this;
    this.config.cards.forEach((card) => {
      card.addEventListener('click', (e) => self.turnOverCard(e));
    });
  }

  turnOverCard(e) {
    this.config.count++;
    e.target.classList.add('card-on');
    const flippedCards = document.querySelectorAll('.card-on');
    if (this.config.count > 1) {
      this.disableCards();
      // setTimeout(this.hideCards.bind(this), 1000, flippedCards);
      this.hideCards(flippedCards);
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
      flippedCard.classList.remove('card-on');
    });
    this.config.count = 0;
    this.enableCards();
  }
}
