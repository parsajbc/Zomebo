import { drawFrame } from "./animator.js"

export var width, height, g_width, g_height, topLeft = [0, 0], block, x_tiles = 28, y_tiles = 20, canvas, ctx;


canvasSizing();
drawFrame();


// function responsible for sizing the canvas and the game perameter within it
// depending on the window size
function canvasSizing() {
    width = window.innerWidth;
    height = window.innerHeight;

    block = 25

    g_width = x_tiles * block;
    g_height = y_tiles * block;

    if (width < g_width) {
        var portion = width / g_width;

        block = portion * block;
        g_width = portion * g_width;
        g_height = portion * g_height;

    } else if (height < g_height) {
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
}