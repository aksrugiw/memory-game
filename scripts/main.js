export { ClassName } from './class-name.js';

function main() {
  const cards = document.querySelectorAll('.card');

  cards.forEach((card) => {
    card.addEventListener('click', flipCard);
  });

  function flipCard() {
    this.classList.add('card-flip');
    const flippedCards = document.querySelectorAll('.card-flip');
    if (flippedCards.length > 1) {
      setTimeout(hideCards, 2000, flippedCards);
    }
  }

  function hideCards(flippedCards) {
    flippedCards.forEach((flippedCard) => {
      flippedCard.classList.remove('card-flip');
    });
  }
}

window.addEventListener('load', main);
