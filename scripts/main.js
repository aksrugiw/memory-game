export { ClassName } from './class-name.js';

function main() {
  const cards = document.querySelectorAll('.card');

  cards.forEach((card) => {
    card.addEventListener('click', flipCard);
    card.cla;
  });

  function flipCard() {
    resetCards();
    this.classList.toggle('card-front');
  }

  function resetCards() {
    const flippedCards = document.querySelectorAll('.card-front');
    if (flippedCards.length > 1) {
      flippedCards.forEach((flippedCard) => {
        flippedCard.classList.remove('card-front');
      });
    }
  }
}

window.addEventListener('load', main);
