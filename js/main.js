/*
    main.js

    Purpose:
    --------
    This is the application's entry point.

    It is responsible for:

    - Finding the canvas.
    - Creating the rendering context.
    - Starting the engine.
    - Running the main loop.

    It should NOT contain simulation logic, rendering code,
    particle behavior, or input handling. Those responsibilities
    belong to their own modules.
*/

const canvas = document.getElementById("gameCanvas");

if (!canvas) {
    throw new Error("Could not find #gameCanvas.");
}

const context = canvas.getContext("2d");

if (!context) {
    throw new Error("Could not create a 2D rendering context.");
}

// Disable blurry pixel interpolation.
context.imageSmoothingEnabled = false;

/**
 * Resize the canvas to match the browser window.
 */
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);

resizeCanvas();

/**
 * Main application loop.
 *
 * For now we simply clear the screen each frame.
 * As the engine grows this loop will become:
 *
 * input
 * ↓
 * simulation
 * ↓
 * renderer
 */
function frame() {

    // Background color
    context.fillStyle = "#202020";
    context.fillRect(0, 0, canvas.width, canvas.height);

    requestAnimationFrame(frame);
}

requestAnimationFrame(frame);
