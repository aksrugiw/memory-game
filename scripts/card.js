export class Card {
  constructor(settings) {
    this.config = {};

    Object.assign(this.config, settings);
  }

  render() {
    this.config.container.innerHTML += `
      <div class="card card-back">
          <img src=${this.config.backImage} alt="back">
           <span class="content">${this.config.content}</span>
        </div>
    `;
  }
}
