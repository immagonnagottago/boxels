/*
    world.js

    Purpose:
    --------
    This module stores and manages the simulation grid.

    Responsibilities:
    - Create the world array (2D grid stored in 1D)
    - Get and set cell values
    - Clear or reset the world
    - Provide safe access to world data

    It does NOT:
    - Simulate physics
    - Render anything
    - Handle input
*/

import { CONFIG } from "./config.js";
import { inBounds, index } from "./util.js";

/**
 * The world grid is stored as a flat array for performance.
 * Each cell contains a material ID (number).
 */
const size = CONFIG.WORLD_WIDTH * CONFIG.WORLD_HEIGHT;

const grid = new Array(size).fill(CONFIG.MATERIAL.EMPTY);

/**
 * Get a cell value safely.
 */
export function get(x, y) {
    if (!inBounds(x, y)) return CONFIG.MATERIAL.STONE; 
    return grid[index(x, y)];
}

/**
 * Set a cell value safely.
 */
export function set(x, y, value) {
    if (!inBounds(x, y)) return;
    grid[index(x, y)] = value;
}

/**
 * Check if a cell is empty.
 */
export function isEmpty(x, y) {
    return get(x, y) === CONFIG.MATERIAL.EMPTY;
}

/**
 * Fill the entire world with a material.
 */
export function fill(value) {
    grid.fill(value);
}

/**
 * Clear the world (set everything to EMPTY).
 */
export function clear() {
    grid.fill(CONFIG.MATERIAL.EMPTY);
}

/**
 * Direct access for systems that need fast iteration.
 * (Renderer / simulation will use this later)
 */
export function getGrid() {
    return grid;
}

/**
 * World dimensions (convenience exports)
 */
export const width = CONFIG.WORLD_WIDTH;
export const height = CONFIG.WORLD_HEIGHT;
