import { drawGameBoundry, drawSideWalls, drawLowerWalls, drawUpperWalls, drawTiles, addLights } from "./map.js"
import { ctx, width, height } from "./index.js"
import { mainPlayer } from "./character.js"


export function drawFrame() {
    addLights();
    drawUpperWalls();
    drawLowerWalls();
    drawTiles();
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