const { Modal } = require('../scripts/modal');

let modal;
beforeEach(() => {
  document.body.innerHTML = '';
  modal = new Modal({
    container: document.body,
    header: 'Test header',
    body: `<p>test</p>`,
    buttonText: 'test',
  });
});

describe('Modal', () => {
  test('Create object', () => {
    const modal = new Modal({});

    expect(modal).toBeDefined();
  });

  test('Render modal window when open', () => {
    modal.open();

    expect(document.body.innerHTML).toContain('Test header');
    expect(document.body.innerHTML).toContain('<div class="modal">');
  });

  test('Close modal after button click', () => {
    modal.close = jest.fn();

    modal.open();

    const button = document.querySelector('.modal-button');
    const overlay = document.querySelector('.overlay');
    button.click();

    expect(modal.close).toHaveBeenCalled();
  });

  test('Call callback function after close modal', () => {
    modal.config.actionAfterClose = jest.fn();

    modal.open();
    modal.close();

    expect(modal.config.actionAfterClose).toHaveBeenCalled();
  });
});
