import { Game } from "./core/Game.js";
import { GameLoop } from "./core/GameLoop.js";

const game = new Game();

const loop = new GameLoop(game);

loop.start();