export class GameBoard {
  constructor(settings) {
    this.config = {};

    Object.assign(this.config, settings);
  }

  render() {
    this.config.container.innerHTML = `<div class="board"></div>`;

    const board = document.querySelector('.board');
    const size = this.config.size;

    for (let i = 0; i < size; i++) {
      board.innerHTML += `<div class="card-row"></div>`;
    }

    const cardRows = document.querySelectorAll('.card-row');

    cardRows.forEach((row) => {
      for (let i = 0; i < size; i++) {
        row.innerHTML += `
          <div class="card card-back">
            <img src="https://cdn.icon-icons.com/icons2/2107/PNG/64/file_type_js_official_icon_130509.png" alt="card">
            <span class="card-content">test</span>
          </div>
        `;
      }
    });
  }
}
