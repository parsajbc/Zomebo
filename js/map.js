import { width, height, g_width, g_height, topLeft, block, x_tiles, y_tiles, ctx } from "./index.js"

export function drawGameBoundry() {
    ctx.beginPath();
    ctx.moveTo(topLeft[0], topLeft[1]);
    ctx.lineTo(topLeft[0] + g_width, topLeft[1]);
    ctx.lineTo(topLeft[0] + g_width, topLeft[1] + g_height);
    ctx.lineTo(topLeft[0], topLeft[1] + g_height);
    ctx.closePath();
    ctx.strokeStyle = 'red';
    ctx.stroke();
}

export function addLights() {
    ctx.beginPath();
    ctx.moveTo(topLeft[0] + 13 * block, topLeft[1] + 20 * block);
    ctx.lineTo(topLeft[0] + 13 * block, topLeft[1] + 18 * block);
    ctx.lineTo(topLeft[0] + 4 * block, topLeft[1] + 18 * block);
    ctx.quadraticCurveTo(topLeft[0] + 3 * block, topLeft[1] + 18 * block, topLeft[0] + 3 * block, topLeft[1] + 17 * block);
    ctx.lineTo(topLeft[0] + 3 * block, topLeft[1] + 2 * block);
    ctx.lineTo(topLeft[0] + 13 * block, topLeft[1] + 2 * block);
    ctx.lineTo(topLeft[0] + 13 * block, topLeft[1]);
    ctx.lineTo(topLeft[0] + 15 * block, topLeft[1]);
    ctx.lineTo(topLeft[0] + 15 * block, topLeft[1] + 2 * block);
    ctx.lineTo(topLeft[0] + 25 * block, topLeft[1] + 2 * block);
    ctx.lineTo(topLeft[0] + 25 * block, topLeft[1] + 17 * block);
    ctx.quadraticCurveTo(topLeft[0] + 25 * block, topLeft[1] + 18 * block, topLeft[0] + 24 * block, topLeft[1] + 18 * block);
    ctx.lineTo(topLeft[0] + 15 * block, topLeft[1] + 18 * block);
    ctx.lineTo(topLeft[0] + 15 * block, topLeft[1] + 20 * block);
    ctx.closePath();


    var grd = ctx.createRadialGradient(width / 2, height / 2, 5 * block, width / 2, height / 2, 15 * block);
    grd.addColorStop(1, 'rgba(255, 0, 0, 0.2)');
    grd.addColorStop(0, "rgba(0, 0, 255, 0");

    ctx.fillStyle = grd;
    ctx.fill();
}

export function drawSideWalls() {
    // First the left wall
    ctx.beginPath();
    ctx.moveTo(topLeft[0] + 13 * block, topLeft[1] + 18 * block);
    ctx.lineTo(topLeft[0] + 4 * block, topLeft[1] + 18 * block);
    ctx.quadraticCurveTo(topLeft[0] + 3 * block, topLeft[1] + 18 * block, topLeft[0] + 3 * block, topLeft[1] + 17 * block);
    ctx.lineTo(topLeft[0] + 3 * block, topLeft[1] + 1.3 * block);
    ctx.quadraticCurveTo(topLeft[0] + 3 * block, topLeft[1] + 0.3 * block, topLeft[0] + 4 * block, topLeft[1] + 0.3 * block);
    ctx.lineTo(topLeft[0] + 13 * block, topLeft[1] + 0.3 * block);
    ctx.lineTo(topLeft[0] + 13 * block, topLeft[1]);
    ctx.lineTo(topLeft[0], topLeft[1]);
    ctx.lineTo(topLeft[0], topLeft[1] + 18.3 * block);
    ctx.lineTo(topLeft[0] + 13 * block, topLeft[1] + 18.3 * block);
    ctx.closePath();
    ctx.strokeStyle = 'red';
    ctx.stroke();

    // Now the right wall
    ctx.beginPath();
    ctx.moveTo(topLeft[0] + 15 * block, topLeft[1] + 18 * block);
    ctx.lineTo(topLeft[0] + 24 * block, topLeft[1] + 18 * block);
    ctx.quadraticCurveTo(topLeft[0] + 25 * block, topLeft[1] + 18 * block, topLeft[0] + 25 * block, topLeft[1] + 17 * block);
    ctx.lineTo(topLeft[0] + 25 * block, topLeft[1] + 1.3 * block);
    ctx.quadraticCurveTo(topLeft[0] + 25 * block, topLeft[1] + 0.3 * block, topLeft[0] + 24 * block, topLeft[1] + 0.3 * block);
    ctx.lineTo(topLeft[0] + 15 * block, topLeft[1] + 0.3 * block);
    ctx.lineTo(topLeft[0] + 15 * block, topLeft[1]);
    ctx.lineTo(topLeft[0] + 28 * block, topLeft[1]);
    ctx.lineTo(topLeft[0] + 28 * block, topLeft[1] + 18.3 * block);
    ctx.lineTo(topLeft[0] + 15 * block, topLeft[1] + 18.3 * block);
    ctx.closePath();
    ctx.strokeStyle = 'red';
    ctx.stroke();
}

export function drawLowerWalls() {
    // First the left wall
    ctx.beginPath();
    ctx.moveTo(topLeft[0], topLeft[1] + 18.3 * block);
    ctx.lineTo(topLeft[0] + 13 * block, topLeft[1] + 18.3 * block);
    ctx.lineTo(topLeft[0] + 13 * block, topLeft[1] + 20 * block);
    ctx.lineTo(topLeft[0], topLeft[1] + 20 * block);
    ctx.closePath();
    ctx.fillStyle = 'rgba(255, 0, 0, 0.1)';
    ctx.fill();
    ctx.strokeStyle = 'red';
    ctx.stroke();

    // Now the right wall
    ctx.beginPath();
    ctx.moveTo(topLeft[0] + 15 * block, topLeft[1] + 18.3 * block);
    ctx.lineTo(topLeft[0] + 28 * block, topLeft[1] + 18.3 * block);
    ctx.lineTo(topLeft[0] + 28 * block, topLeft[1] + 20 * block);
    ctx.lineTo(topLeft[0] + 15 * block, topLeft[1] + 20 * block);
    ctx.closePath();
    ctx.fillStyle = 'rgba(255, 0, 0, 0.1)';
    ctx.fill();
    ctx.strokeStyle = 'red';
    ctx.stroke();
}

export function drawUpperWalls() {
    // First the left wall
    ctx.beginPath();
    ctx.moveTo(topLeft[0] + 3 * block, topLeft[1] + 2 * block);
    ctx.lineTo(topLeft[0] + 3 * block, topLeft[1] + 1.3 * block);
    ctx.quadraticCurveTo(topLeft[0] + 3 * block, topLeft[1] + 0.3 * block, topLeft[0] + 4 * block, topLeft[1] + 0.3 * block);
    ctx.lineTo(topLeft[0] + 13 * block, topLeft[1] + 0.3 * block);
    ctx.lineTo(topLeft[0] + 13 * block, topLeft[1] + 2 * block);
    ctx.closePath();
    ctx.fillStyle = 'rgba(255, 0, 0, 0.1)';
    ctx.fill();
    ctx.strokeStyle = 'red';
    ctx.stroke();

    // Now the right wall
    ctx.beginPath();
    ctx.moveTo(topLeft[0] + 25 * block, topLeft[1] + 2 * block);
    ctx.lineTo(topLeft[0] + 25 * block, topLeft[1] + 1.3 * block);
    ctx.quadraticCurveTo(topLeft[0] + 25 * block, topLeft[1] + 0.3 * block, topLeft[0] + 24 * block, topLeft[1] + 0.3 * block);
    ctx.lineTo(topLeft[0] + 15 * block, topLeft[1] + 0.3 * block);
    ctx.lineTo(topLeft[0] + 15 * block, topLeft[1] + 2 * block);
    ctx.closePath();
    ctx.fillStyle = 'rgba(255, 0, 0, 0.1)';
    ctx.fill();
    ctx.strokeStyle = 'red';
    ctx.stroke();
}

export function drawTiles() {
    ctx.beginPath();
    // horizontal lines
    for (let i = 0; i < 15; i++) {
        ctx.moveTo(topLeft[0] + 3 * block, topLeft[1] + (3 + i) * block);
        ctx.lineTo(topLeft[0] + 25 * block, topLeft[1] + (3 + i) * block);
    } // vertical lines
    for (let i = 0; i < 21; i++) {
        ctx.moveTo(topLeft[0] + (4 + i) * block, topLeft[1] + 2 * block);
        ctx.lineTo(topLeft[0] + (4 + i) * block, topLeft[1] + 18 * block);
    } // leftovers
    ctx.moveTo(topLeft[0] + 14 * block, topLeft[1]);
    ctx.lineTo(topLeft[0] + 14 * block, topLeft[1] + 2 * block);

    ctx.moveTo(topLeft[0] + 13 * block, topLeft[1] + block);
    ctx.lineTo(topLeft[0] + 15 * block, topLeft[1] + block);

    ctx.moveTo(topLeft[0] + 13 * block, topLeft[1] + 2 * block);
    ctx.lineTo(topLeft[0] + 15 * block, topLeft[1] + 2 * block);

    ctx.moveTo(topLeft[0] + 14 * block, topLeft[1] + 18 * block);
    ctx.lineTo(topLeft[0] + 14 * block, topLeft[1] + 20 * block);

    ctx.moveTo(topLeft[0] + 13 * block, topLeft[1] + 18 * block);
    ctx.lineTo(topLeft[0] + 15 * block, topLeft[1] + 18 * block);

    ctx.moveTo(topLeft[0] + 13 * block, topLeft[1] + 19 * block);
    ctx.lineTo(topLeft[0] + 15 * block, topLeft[1] + 19 * block);

    ctx.strokeStyle = 'rgba(255, 0, 0, 0.3)';
    ctx.stroke();
}