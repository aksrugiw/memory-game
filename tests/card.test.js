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

  test('render card with content', () => {
    const card = new Card({
      container: document.body,
      content: 'test',
    });

    card.render();

    expect(document.querySelector('.content').src).toContain('test');
  });
});
