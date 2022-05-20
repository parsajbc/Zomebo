import { drawGameBoundry, drawSideWalls, drawLowerWalls, drawUpperWalls, drawTiles, addLights } from "./map.js"
import { ctx, width, height } from "./index.js"
import { characterInstant } from "./character.js"
import { drawMobs } from "./mob.js"
import { drawGun } from "./gunz.js"


export function drawFrame() {
    drawUpperWalls();
    drawLowerWalls();
    drawTiles();
    addLights();
    drawMobs();
    drawGun(0);
    characterInstant();
    drawGun(1);
    drawSideWalls();
    drawGameBoundry();
}

export function animate() {
    ctx.clearRect(0, 0, width, height);
    drawFrame();
    requestAnimationFrame(animate);
}