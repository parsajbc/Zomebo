import { drawFrame } from "./animator.js"

export var width, height, g_width, g_height, topLeft = [0, 0], block, x_tiles = 28, y_tiles = 20, canvas, ctx;

// width & height: these variables hold the inner lengths of the window used to create a canvas covering the page
// g_width & g_height: these variables hold the lengths of the playable region (the walls + the area player could move)
// topLeft: the coordinate of the top left corner of the playable region
// block: the length of one side of a tile (or a cell)
// x_tiles & y_tiles: the number of tiles on each axis that make up the playable region
// canvas & ctx: the canvas used to show each frame of the game and its 2d contents

canvasSizing();
addEventListners()

// function responsible for sizing the canvas and the game perameter within it depending on the window size
function canvasSizing() {
    width = window.innerWidth;
    height = window.innerHeight;

    block = 30

    g_width = x_tiles * block;
    g_height = y_tiles * block;

    if (width < g_width) {
        var portion = width / g_width;

        block = portion * block;
        g_width = portion * g_width;
        g_height = portion * g_height;

    } if (height < g_height) {
        var portion = height / g_height;

        block = portion * block;
        g_width = portion * g_width;
        g_height = portion * g_height;
    }

    topLeft[0] = (width - g_width) / 2;
    topLeft[1] = (height - g_height) / 2;

    canvas = document.getElementById('gameCanvas');
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext('2d');
    drawFrame();
}

function addEventListners() {
    window.addEventListener('resize', canvasSizing);
}
