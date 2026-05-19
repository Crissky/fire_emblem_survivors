export class GameLoop {
  constructor(game) {
    this.game = game;

    this.lastTime = 0;
  }

  start() {
    requestAnimationFrame((time) => this.loop(time));
  }

  loop(currentTime) {
    const deltaTime = (currentTime - this.lastTime) / 1000;

    this.lastTime = currentTime;

    this.game.update(deltaTime);
    this.game.draw();

    requestAnimationFrame((time) => this.loop(time));
  }
}