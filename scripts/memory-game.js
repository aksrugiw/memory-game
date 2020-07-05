export class MemoryGame {
  constructor(settings) {
    this.config = {};
    this.clickedCards = [];

    Object.assign(this.config, settings);
  }

  setupClickEvents() {
    const self = this;
    this.config.cards.forEach((card) => {
      card.addEventListener('click', (e) => self.turnOverCard(e));
    });
  }

  turnOverCard(e) {
    e.target.classList.add('card-on');
    this.clickedCards.push(e.target);

    if (this.clickedCards.length < 2) {
      return;
    }

    if (this.clickedCards.length === 2) {
      this.disableCards();

      if (this.compareCards()) {
        this.keepCards();
        this.enableCards();
      } else {
        this.hideCardsAfterTime();
      }
    }

    this.clickedCards = [];
  }

  compareCards() {
    return this.clickedCards[0].children[0].alt === this.clickedCards[1].children[0].alt;
  }

  keepCards() {
    this.clickedCards.forEach((card) => {
      card.classList.remove('card-on', 'card-back');
      card.classList.add('card-keep');
    });

    this.finishGame();
  }

  hideCardsAfterTime() {
    setTimeout(this.hideCards.bind(this), 1000);
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

  hideCards() {
    const flippedCards = document.querySelectorAll('.card-on');

    flippedCards.forEach((flippedCard) => {
      flippedCard.classList.remove('card-on');
    });
    this.enableCards();
  }

  startGame() {}

  finishGame() {
    const backCards = document.querySelectorAll('.card-back');

    if (backCards.length === 0) {
      this.showModal();
    }
  }

  showModal() {
    const modal = document.querySelector('.modal');

    modal.classList.add('show');
  }
}
