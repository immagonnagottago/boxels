/*
    renderer.js

    Purpose:
    --------
    Converts the simulation world into pixels on the canvas.

    Responsibilities:
    - Read world grid
    - Translate material IDs into colors
    - Draw to canvas

    It does NOT:
    - Simulate physics
    - Modify world state
    - Handle input
*/

import { getGrid, width, height } from "./world.js";
import { MATERIALS } from "./materials.js";
import { CONFIG } from "./config.js";

/**
 * Render the entire world to the canvas.
 *
 * @param {CanvasRenderingContext2D} ctx
 */
export function render(ctx) {

    const grid = getGrid();
    const pixelSize = CONFIG.PIXEL_SIZE;

    // Loop through every cell in the world
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {

            const id = grid[y * width + x];
            const material = MATERIALS[id];

            if (!material) continue;

            ctx.fillStyle = material.color;

            ctx.fillRect(
                x * pixelSize,
                y * pixelSize,
                pixelSize,
                pixelSize
            );
        }
    }
}
