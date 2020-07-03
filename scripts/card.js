export class Card {
  constructor(settings) {
    this.config = {};

    Object.assign(this.config, settings);
  }

  render() {
    this.config.container.innerHTML += `
      <div class="card card-back">
        <div class="content">
          <img src="../assets/images/${this.config.content}.png" alt="memory card">
        </div>
      </div>
    `;
  }
}
