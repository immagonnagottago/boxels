/*
    materials.js

    Purpose:
    --------
    Defines all material types used in the world.

    Each material has:
    - id (stored in the world grid)
    - name (debugging / clarity)
    - color (used by renderer later)
    - properties (future simulation behavior hooks)

    IMPORTANT:
    This file does NOT implement physics.
    It only describes materials.
*/

import { CONFIG } from "./config.js";

/**
 * Material registry
 * Each material is referenced by its numeric ID from CONFIG.
 */
export const MATERIALS = {

    [CONFIG.MATERIAL.EMPTY]: {
        id: CONFIG.MATERIAL.EMPTY,
        name: "EMPTY",
        color: CONFIG.COLORS.EMPTY,
        solid: false,
        density: 0
    },

    [CONFIG.MATERIAL.SAND]: {
        id: CONFIG.MATERIAL.SAND,
        name: "SAND",
        color: CONFIG.COLORS.SAND,
        solid: true,
        density: 2
    },

    [CONFIG.MATERIAL.WATER]: {
        id: CONFIG.MATERIAL.WATER,
        name: "WATER",
        color: CONFIG.COLORS.WATER,
        solid: false,
        density: 1
    },

    [CONFIG.MATERIAL.STONE]: {
        id: CONFIG.MATERIAL.STONE,
        name: "STONE",
        color: CONFIG.COLORS.STONE,
        solid: true,
        density: 10
    },

    [CONFIG.MATERIAL.WOOD]: {
        id: CONFIG.MATERIAL.WOOD,
        name: "WOOD",
        color: CONFIG.COLORS.WOOD,
        solid: true,
        density: 5,
        flammable: true
    },

    [CONFIG.MATERIAL.FIRE]: {
        id: CONFIG.MATERIAL.FIRE,
        name: "FIRE",
        color: CONFIG.COLORS.FIRE,
        solid: false,
        density: 0,
        lifespan: 30
    },

    [CONFIG.MATERIAL.SMOKE]: {
        id: CONFIG.MATERIAL.SMOKE,
        name: "SMOKE",
        color: CONFIG.COLORS.SMOKE,
        solid: false,
        density: -1,
        lifespan: 50
    }
};

/**
 * Get material data by id.
 */
export function getMaterial(id) {
    return MATERIALS[id] || MATERIALS[CONFIG.MATERIAL.EMPTY];
}

/**
 * Check if a material is solid.
 */
export function isSolid(id) {
    return getMaterial(id).solid === true;
}

/**
 * Get density of a material.
 */
export function getDensity(id) {
    return getMaterial(id).density ?? 0;
}

/**
 * Check if material can burn.
 */
export function isFlammable(id) {
    return getMaterial(id).flammable === true;
}
