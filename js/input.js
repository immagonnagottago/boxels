import { CONFIG } from '../config.js';

export class Input {
  constructor(canvas, grid) {
    this.canvas = canvas;
    this.grid = grid;
    this.currentMaterial = CONFIG.MATERIAL.SAND;
    this.isDrawing = false;

    // Store canvas element for coordinate calculation
    document.addEventListener('mousedown', (e) => this.onMouseDown(e));
    document.addEventListener('mousemove', (e) => this.onMouseMove(e));
    document.addEventListener('mouseup', () => this.onMouseUp());
    window.addEventListener('keydown', (e) => this.onKeyDown(e));
  }

  getGridCoords(clientX, clientY) {
    const rect = this.canvas.getBoundingClientRect();
    
    // Canvas resolution vs display size
    const canvasResX = this.canvas.width;   // 600
    const canvasResY = this.canvas.height;  // 300
    const displayWidth = rect.width;
    const displayHeight = rect.height;
    
    // Mouse position within the display area
    const relativeX = clientX - rect.left;
    const relativeY = clientY - rect.top;
    
    // Scale to canvas resolution
    const x = Math.floor((relativeX / displayWidth) * canvasResX / CONFIG.PIXEL_SIZE);
    const y = Math.floor((relativeY / displayHeight) * canvasResY / CONFIG.PIXEL_SIZE);
    
    return { x, y };
  }

  onMouseDown(e) {
    if (!this.canvas.getBoundingClientRect()) return;
    this.isDrawing = true;
    const { x, y } = this.getGridCoords(e.clientX, e.clientY);
    this.grid.fill(x, y, CONFIG.BRUSH_RADIUS, this.currentMaterial);
  }

  onMouseMove(e) {
    if (this.isDrawing && this.canvas.getBoundingClientRect()) {
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
