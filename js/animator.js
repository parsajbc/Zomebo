import { drawGameBoundry, drawSideWalls, drawLowerWalls, drawUpperWalls, drawTiles, addLights } from "./map.js"
import { ctx, width, height } from "./index.js"
import { mainPlayer } from "./character.js"
import { drawMobs } from "./mob.js"


export function drawFrame() {
    drawUpperWalls();
    drawLowerWalls();
    drawTiles();
    addLights();
    drawMobs();
    mainPlayer.updatePosition();
    mainPlayer.draw();
    drawSideWalls();
    drawGameBoundry();
}

export function animate() {
    ctx.clearRect(0, 0, width, height);
    drawFrame();
    requestAnimationFrame(animate);
}