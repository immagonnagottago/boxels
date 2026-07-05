import { CONFIG } from '../config.js';
import { Grid } from './grid.js';
import { Renderer } from './renderer.js';
import { Physics } from './physics.js';
import { Input } from './input.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = CONFIG.WORLD_WIDTH * CONFIG.PIXEL_SIZE;
canvas.height = CONFIG.WORLD_HEIGHT * CONFIG.PIXEL_SIZE;

// Initialize systems
const grid = new Grid(CONFIG.WORLD_WIDTH, CONFIG.WORLD_HEIGHT);
const renderer = new Renderer(ctx, grid);
const physics = new Physics(grid);
const input = new Input(canvas, grid);

let lastTime = 0;
const targetFrameTime = 1000 / CONFIG.TARGET_FPS;

function gameLoop(currentTime) {
  if (lastTime === 0) lastTime = currentTime;
  const deltaTime = currentTime - lastTime;
  lastTime = currentTime;

  // Update physics
  physics.update();

  // Render
  renderer.render();

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
