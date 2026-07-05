import { CONFIG } from '../config.js';

export class Grid {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.data = new Uint8Array(width * height);
  }

  set(x, y, value) {
    if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
      this.data[y * this.width + x] = value;
    }
  }

  get(x, y) {
    if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
      return this.data[y * this.width + x];
    }
    return CONFIG.MATERIAL.EMPTY;
  }

  inBounds(x, y) {
    return x >= 0 && x < this.width && y >= 0 && y < this.height;
  }

  fill(x, y, radius, material) {
    for (let dx = -radius; dx <= radius; dx++) {
      for (let dy = -radius; dy <= radius; dy++) {
        if (dx * dx + dy * dy <= radius * radius) {
          this.set(x + dx, y + dy, material);
        }
      }
    }
  }

  clear(x, y, radius) {
    this.fill(x, y, radius, CONFIG.MATERIAL.EMPTY);
  }
}
