import { drawGameBoundry, drawSideWalls, drawLowerWalls, drawUpperWalls, drawTiles } from "./map.js"

export function drawFrame() {
    drawSideWalls();
    drawUpperWalls();
    drawLowerWalls();
    drawTiles();
    drawGameBoundry();
}