/*
    simulation.js

    Purpose:
    --------
    This module controls all world updates.

    Responsibilities (eventually):
    - Sand falling
    - Water flow
    - Fire spread
    - Smoke behavior
    - Interaction rules between materials

    For now:
    - We only iterate over the world grid
    - No real physics yet (structure first)
*/

import { width, height, get, set } from "./world.js";
import { CONFIG } from "./config.js";

/**
 * Main simulation step.
 *
 * This will be called once per frame (later we may decouple it).
 */
export function step() {

    // Loop bottom-to-top so falling logic works later
    for (let y = height - 1; y >= 0; y--) {
        for (let x = 0; x < width; x++) {

            const id = get(x, y);

            // Skip empty cells early (important for performance later)
            if (id === CONFIG.MATERIAL.EMPTY) continue;

            // Future behavior switch will go here:
            // switch (id) { ... }

        }
    }
}

/**
 * Optional helper for future sub-stepping or debugging.
 */
export function stepRegion(x0, y0, x1, y1) {
    for (let y = y1; y >= y0; y--) {
        for (let x = x0; x <= x1; x++) {

            const id = get(x, y);
            if (id === CONFIG.MATERIAL.EMPTY) continue;

        }
    }
}
