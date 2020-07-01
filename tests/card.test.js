import { Card } from '../scripts/card.js';

describe('Card', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  test('create object', () => {
    const card = new Card({ container: document.body });

    expect(card.config.container).toBe(document.body);
  });

  test('render card', () => {
    const card = new Card({
      container: document.body,
    });

    card.render();

    expect(document.querySelector('.card')).toBeDefined();
  });

  test('render card with back image', () => {
    const card = new Card({
      container: document.body,
      backImage: 'dummy-image.jpg',
    });

    card.render();
    const image = document.querySelector('img');

    expect(image.src).toContain('dummy-image.jpg');
  });

  test('render card with content', () => {
    const card = new Card({
      container: document.body,
      content: 'test',
    });

    card.render();

    expect(document.querySelector('span.content').innerHTML).toContain('test');
  });
});
