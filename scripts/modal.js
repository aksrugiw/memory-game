export class Modal {
  constructor(settings) {
    this.config = {};
    Object.assign(this.config, settings);
  }

  render() {
    this.config.container.innerHTML += `
    <div class="overlay">
      <div class="modal">
        <h2 class="modal-header">${this.config.header}</h2>
        <div class="modal-body">
          ${this.config.body}
          <button class="modal-button">${this.config.buttonText}</button>
        </div>
      </div>
    </div>
    `;

    this.setupClickEvents();
  }

  setupClickEvents() {
    const button = document.querySelector('.modal-button');

    button.addEventListener('click', () => location.reload());
  }

  open() {
    this.render();
    const overlay = document.querySelector('.overlay');

    overlay.classList.add('show');
  }

  close() {
    const overlay = document.querySelector('.overlay');

    overlay.classList.remove('show');
  }
}
