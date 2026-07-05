/*
    main.js

    Purpose:
    --------
    Entry point of the engine.

    Responsibilities:
    - Initialize canvas
    - Maintain main loop
    - Call simulation + renderer in correct order

    This file should stay lightweight and orchestration-only.
*/

import { step as simulationStep } from "./simulation.js";
import { render as renderWorld } from "./renderer.js";

const canvas = document.getElementById("gameCanvas");

if (!canvas) {
    throw new Error("Could not find #gameCanvas.");
}

const ctx = canvas.getContext("2d");

if (!ctx) {
    throw new Error("Could not create 2D context.");
}

// Disable smoothing for pixel-perfect rendering
ctx.imageSmoothingEnabled = false;

/**
 * Resize canvas to full window
 */
function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", resize);
resize();

/**
 * Main engine loop
 */
function loop() {

    // 1. SIMULATION STEP (world updates)
    simulationStep();

    // 2. CLEAR SCREEN
    ctx.fillStyle = "#202020";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 3. RENDER WORLD
    renderWorld(ctx);

    requestAnimationFrame(loop);
}

// Start engine
requestAnimationFrame(loop);
