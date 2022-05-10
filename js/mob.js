import { width, height, g_width, g_height, topLeft, block, x_tiles, y_tiles, ctx } from "./index.js"
import { mainPlayer } from "./character.js"
export var mob = [];


class Mob {
    constructor() {
        this.x = 7.5;
        this.y = 6.5;
        this.img = new Image();
        this.img.src = '../img/mob.png';
    }

    characterDistance() {
        return Math.sqrt((this.x - mainPlayer.x) ** 2 + (this.y - mainPlayer.y) ** 2);
    }

    updatePosition() {
        if (this.characterDistance() >= 1) {
            return;
        } else {
            let pushDistance = (1 - this.characterDistance()) * 0.2;
            let angle = Math.atan((this.y - mainPlayer.y) / (this.x - mainPlayer.x));
            let y_move = Math.sin(angle) * pushDistance;
            let x_move = Math.cos(angle) * pushDistance;
            if (this.x < mainPlayer.x) {
                mainPlayer.pushback(x_move, y_move);
                this.x -= x_move;
                this.y -= y_move;
            } else {
                mainPlayer.pushback(-x_move, -y_move);
                this.x += x_move;
                this.y += y_move;
            }
        }
    }

    draw() {
        let x = topLeft[0] + this.x * block;
        let y = topLeft[1] + this.y * block;

        ctx.drawImage(this.img, x - 0.5 * block, y - 0.65 * block, block, 1.15 * block);
    }
}

export function createMobs() {
    mob.push(new Mob());
}

export function drawMobs() {
    for (let i = 0; i < mob.length; i++) {
        mob[i].updatePosition();
        mob[i].draw();
    }
}


