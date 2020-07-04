export class Card {
  constructor(settings) {
    this.config = {};

    Object.assign(this.config, settings);
  }

  render() {
    this.config.container.innerHTML += `
      <div class="card card-back">
          <img class="content" src="../assets/images/${this.config.content}.png" alt="${this.config.content}">
      </div>
    `;
  }
}
