import { CONFIG } from '../config.js';

export class Physics {
  constructor(grid) {
    this.grid = grid;
  }

  update() {
    // Process from bottom to top to avoid processing same particle twice
    for (let y = this.grid.height - 2; y >= 0; y--) {
      for (let x = 0; x < this.grid.width; x++) {
        const material = this.grid.get(x, y);

        if (material === CONFIG.MATERIAL.SAND) {
          this.updateSand(x, y);
        } else if (material === CONFIG.MATERIAL.WATER) {
          this.updateWater(x, y);
        }
      }
    }
  }

  updateSand(x, y) {
    const below = this.grid.get(x, y + 1);

    // Fall if empty
    if (below === CONFIG.MATERIAL.EMPTY) {
      this.grid.set(x, y, CONFIG.MATERIAL.EMPTY);
      this.grid.set(x, y + 1, CONFIG.MATERIAL.SAND);
      return;
    }

    // Slide left or right if can't fall
    if (below !== CONFIG.MATERIAL.EMPTY) {
      const left = this.grid.get(x - 1, y + 1);
      const right = this.grid.get(x + 1, y + 1);

      if (left === CONFIG.MATERIAL.EMPTY && Math.random() > 0.5) {
        this.grid.set(x, y, CONFIG.MATERIAL.EMPTY);
        this.grid.set(x - 1, y + 1, CONFIG.MATERIAL.SAND);
      } else if (right === CONFIG.MATERIAL.EMPTY) {
        this.grid.set(x, y, CONFIG.MATERIAL.EMPTY);
        this.grid.set(x + 1, y + 1, CONFIG.MATERIAL.SAND);
      }
    }
  }

  updateWater(x, y) {
    const below = this.grid.get(x, y + 1);

    // Fall if empty
    if (below === CONFIG.MATERIAL.EMPTY) {
      this.grid.set(x, y, CONFIG.MATERIAL.EMPTY);
      this.grid.set(x, y + 1, CONFIG.MATERIAL.WATER);
      return;
    }

    // Spread horizontally
    const left = this.grid.get(x - 1, y);
    const right = this.grid.get(x + 1, y);

    if (left === CONFIG.MATERIAL.EMPTY) {
      this.grid.set(x - 1, y, CONFIG.MATERIAL.WATER);
    }
    if (right === CONFIG.MATERIAL.EMPTY) {
      this.grid.set(x + 1, y, CONFIG.MATERIAL.WATER);
    }
  }
}
