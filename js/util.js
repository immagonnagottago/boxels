/*
    util.js

    Purpose:
    --------
    A collection of small, dependency-free helper functions.

    Rules:
    - No state.
    - No side effects.
    - No engine-specific logic.
    - Pure functions only.
*/

import { CONFIG } from "./config.js";

/**
 * Clamp a value between a minimum and maximum.
 */
export function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

/**
 * Linear interpolation between two values.
 */
export function lerp(a, b, t) {
    return a + (b - a) * t;
}

/**
 * Convert world coordinates (grid) to screen coordinates (pixels).
 */
export function worldToScreen(x, y) {
    return {
        x: x * CONFIG.PIXEL_SIZE,
        y: y * CONFIG.PIXEL_SIZE
    };
}

/**
 * Convert screen coordinates (pixels) to world grid coordinates.
 */
export function screenToWorld(x, y) {
    return {
        x: Math.floor(x / CONFIG.PIXEL_SIZE),
        y: Math.floor(y / CONFIG.PIXEL_SIZE)
    };
}

/**
 * Generate a random integer between min and max (inclusive).
 */
export function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generate a random float between min and max.
 */
export function randFloat(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Check if a coordinate is inside world bounds.
 */
export function inBounds(x, y) {
    return (
        x >= 0 &&
        y >= 0 &&
        x < CONFIG.WORLD_WIDTH &&
        y < CONFIG.WORLD_HEIGHT
    );
}

/**
 * 2D array index helper (for flattened world arrays later).
 */
export function index(x, y) {
    return y * CONFIG.WORLD_WIDTH + x;
}
