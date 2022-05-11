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
    grd.addColorStop(1, 'rgba(0, 0, 0, 0.45)');
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
    ctx.fillStyle = 'rgba(21,20,50,1)';
    ctx.fill();

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
    ctx.fillStyle = 'rgba(21,20,50,1)';
    ctx.fill();
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

function tile(x, y, z) {
    ctx.beginPath();
    ctx.moveTo(topLeft[0] + x * block, topLeft[1] + y * block);
    ctx.lineTo(topLeft[0] + (x + 1) * block, topLeft[1] + y * block);
    ctx.lineTo(topLeft[0] + (x + 1) * block, topLeft[1] + (y + 1) * block);
    ctx.lineTo(topLeft[0] + x * block, topLeft[1] + (y + 1) * block);
    ctx.closePath();
    if (z == 0) {
        ctx.fillStyle = 'rgba(59, 59, 91, 1)';
    } else ctx.fillStyle = "black";
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 0, 0, 0.3)';
    ctx.stroke();
}

function smallerTile(x, y, z) {
    ctx.beginPath();
    ctx.moveTo(topLeft[0] + (x - 0.3) * block, topLeft[1] + y * block);
    ctx.lineTo(topLeft[0] + x * block, topLeft[1] + (y + 0.2) * block);
    ctx.lineTo(topLeft[0] + (x + 0.3) * block, topLeft[1] + y * block);
    ctx.lineTo(topLeft[0] + x * block, topLeft[1] + (y - 0.2) * block);
    ctx.closePath();
    if (z == 0) {
        ctx.fillStyle = 'rgba(59, 59, 91, 1)';
    } else ctx.fillStyle = "black";
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 0, 0, 0.3)';
    ctx.stroke();
}

export function drawTiles() {
    for (let i = 2; i < 18; i++) {
        let z = i % 2;
        for (let j = 3; j < 25; j++) {
            tile(j, i, z % 2);
            z += 1;
        }
    }

    for (let i = 3; i < 18; i++) {
        let z = i % 2;
        for (let j = 4; j < 25; j++) {
            smallerTile(j, i, z % 2);
            z += 1;
        }
    }

    tile(13, 0, 0);
    tile(13, 1, 1);
    tile(14, 0, 1);
    tile(14, 1, 0);

    tile(13, 18, 0);
    tile(13, 19, 1);
    tile(14, 18, 1);
    tile(14, 19, 0);

    smallerTile(14, 18, 0);
    smallerTile(14, 19, 1);
    smallerTile(14, 1, 0);
    smallerTile(14, 2, 1);
}