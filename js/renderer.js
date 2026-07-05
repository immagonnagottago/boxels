import { CONFIG } from '../config.js';

export class Renderer {
  constructor(ctx, grid) {
    this.ctx = ctx;
    this.grid = grid;
  }

  render() {
    // Clear canvas
    this.ctx.fillStyle = CONFIG.COLORS.EMPTY;
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    // Draw each pixel
    for (let y = 0; y < this.grid.height; y++) {
      for (let x = 0; x < this.grid.width; x++) {
        const material = this.grid.get(x, y);
        if (material !== CONFIG.MATERIAL.EMPTY) {
          this.drawPixel(x, y, material);
        }
      }
    }
  }

  drawPixel(x, y, material) {
    let color = CONFIG.COLORS.EMPTY;

    if (material === CONFIG.MATERIAL.SAND) {
      color = CONFIG.COLORS.SAND;
    } else if (material === CONFIG.MATERIAL.WATER) {
      color = CONFIG.COLORS.WATER;
    } else if (material === CONFIG.MATERIAL.STONE) {
      color = CONFIG.COLORS.STONE;
    } else if (material === CONFIG.MATERIAL.WOOD) {
      color = CONFIG.COLORS.WOOD;
    }

    this.ctx.fillStyle = color;
    this.ctx.fillRect(
      x * CONFIG.PIXEL_SIZE,
      y * CONFIG.PIXEL_SIZE,
      CONFIG.PIXEL_SIZE,
      CONFIG.PIXEL_SIZE
    );
  }
}
