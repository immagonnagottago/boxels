import { CONFIG } from '../config.js';

export class Input {
  constructor(canvas, grid) {
    this.canvas = canvas;
    this.grid = grid;
    this.currentMaterial = CONFIG.MATERIAL.SAND;
    this.isDrawing = false;

    canvas.addEventListener('mousedown', (e) => this.onMouseDown(e));
    canvas.addEventListener('mousemove', (e) => this.onMouseMove(e));
    canvas.addEventListener('mouseup', () => this.onMouseUp());
    canvas.addEventListener('mouseleave', () => this.onMouseUp());
    window.addEventListener('keydown', (e) => this.onKeyDown(e));
  }

  getGridCoords(clientX, clientY) {
    const rect = this.canvas.getBoundingClientRect();
    // Account for canvas being stretched by CSS - use actual canvas resolution, not display size
    const scaleX = this.canvas.width / rect.width;
    const scaleY = this.canvas.height / rect.height;
    const x = Math.floor((clientX - rect.left) * scaleX);
    const y = Math.floor((clientY - rect.top) * scaleY);
    return { x, y };
  }

  onMouseDown(e) {
    this.isDrawing = true;
    const { x, y } = this.getGridCoords(e.clientX, e.clientY);
    this.grid.fill(x, y, CONFIG.BRUSH_RADIUS, this.currentMaterial);
  }

  onMouseMove(e) {
    if (this.isDrawing) {
      const { x, y } = this.getGridCoords(e.clientX, e.clientY);
      this.grid.fill(x, y, CONFIG.BRUSH_RADIUS, this.currentMaterial);
    }
  }

  onMouseUp() {
    this.isDrawing = false;
  }

  onKeyDown(e) {
    // Number keys to switch materials
    if (e.key === '1') this.currentMaterial = CONFIG.MATERIAL.SAND;
    if (e.key === '2') this.currentMaterial = CONFIG.MATERIAL.WATER;
    if (e.key === '3') this.currentMaterial = CONFIG.MATERIAL.STONE;
    if (e.key === '0') this.currentMaterial = CONFIG.MATERIAL.EMPTY; // Eraser
  }
}
