/*
    config.js

    Purpose:
    --------
    Central configuration for the entire engine.

    Rules:
    - Only constants live here.
    - No logic.
    - No side effects.
    - Every other module can import from this file.
*/

export const CONFIG = {

    // Canvas / rendering scale
    PIXEL_SIZE: 2,          // Size of one simulation pixel on screen
    TARGET_FPS: 60,

    // World dimensions (simulation grid size)
    WORLD_WIDTH: 300,
    WORLD_HEIGHT: 150,

    // Simulation timing
    TIME_STEP: 1.0,

    // Brush / interaction defaults (future digging & painting tools)
    BRUSH_RADIUS: 3,
    BRUSH_STRENGTH: 1,

    // Materials IDs (we’ll expand this later in materials.js)
    MATERIAL: {
        EMPTY: 0,
        SAND: 1,
        WATER: 2,
        STONE: 3,
        WOOD: 4,
        FIRE: 5,
        SMOKE: 6
    },

    // Rendering colors (temporary placeholder system)
    COLORS: {
        EMPTY: "#1b1b1b",
        SAND: "#d8c27a",
        WATER: "#4aa3ff",
        STONE: "#7a7a7a",
        WOOD: "#8b5a2b",
        FIRE: "#ff5a1f",
        SMOKE: "#b0b0b0"
    }
};
