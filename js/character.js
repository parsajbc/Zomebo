import { width, height, g_width, g_height, topLeft, block, x_tiles, y_tiles, ctx } from "./index.js"

var spd = 0.07;
export var mainPlayer, imgSrc = '../img/guy-';


export class Individual {
    constructor(type) {
        this.n = 0;
        this.dir = 'up';
        this.up = 0;
        this.down = 0;
        this.left = 0;
        this.right = 0;
        this.speed = spd;
        this.counter = 0;
        if (type == 'mc') {
            this.x = 13.5;
            this.y = 10.5;
            this.base_image = new Image();
            this.base_image.src = '../img/guy-down-1.png';
        } else {
            this.x = 0;
            this.y = 0;
        }
    }


    draw() {
        let x = topLeft[0] + this.x * block;
        let y = topLeft[1] + this.y * block;

        ctx.drawImage(this.base_image, x - 0.38 * block, y - 0.7 * block, 0.7 * block, 1.3 * block);

        // ctx.beginPath();
        // ctx.moveTo(x - 0.4 * block, y + 0.5 * block);
        // ctx.lineTo(x + 0.4 * block, y + 0.5 * block);
        // ctx.lineTo(x, y - 0.5 * block);
        // ctx.closePath();
        // ctx.strokeStyle = 'red';
        // ctx.stroke();
    }

    updatePosition() {
        if (this.up) {
            this.dir = 'up';
            this.moveup();
        } if (this.down) {
            if (!(this.up)) {
                this.dir = 'down';
            }
            this.movedown();
        } if (this.right) {
            if (this.up) {
                this.dir = 'upright'
            } else if (this.down) {
                this.dir = 'downright';
            } else { this.dir = 'right' }
            this.moveright();
        } if (this.left) {
            if (this.right) { } else if (this.up) {
                this.dir = 'upleft';
            } else if (this.down) {
                this.dir = 'downleft';
            } else { this.dir = 'left'; }
            this.moveleft();
        }

        if ((this.down + this.up + this.left + this.right) > 0) {
            this.counter++;
        }

        let picCounter = (Math.floor(this.counter / 7) % 2) + 1;
        this.base_image.src = imgSrc + this.dir + '-' + picCounter + '.png';
    }

    moveup() {
        if ((this.x > 3.35 && this.x < 13.35) || (this.x > 14.65 && this.x < 24.65)) {
            if (this.y - this.speed > 2.25) {
                this.y = this.y - this.speed;
            }
        } if (this.x >= 13.35 && this.x <= 14.65) {
            if (this.y - this.speed > 0.25) {
                this.y = this.y - this.speed;
            }
        }
    }

    movedown() {
        if ((this.x > 3.35 && this.x < 13.35) || (this.x > 14.65 && this.x < 24.65)) {
            if (this.y + this.speed < 17.4) {
                this.y = this.y + this.speed;
            }
        } if (this.x >= 13.35 && this.x <= 14.65) {
            if (this.y + this.speed < 19.4) {
                this.y = this.y + this.speed;
            }
        }
    }

    moveright() {
        if ((this.y <= 2.25 && this.y >= 0.25) || (this.y >= 17.4 && this.y < 19.4)) {
            if (this.x + this.speed < 14.65) {
                this.x = this.x + this.speed;
            }
        } if (this.y > 2.25 && this.y < 17.4) {
            if (this.x + this.speed < 24.65) {
                this.x = this.x + this.speed;
            }
        }
    }

    moveleft() {
        if ((this.y <= 2.25 && this.y >= 0.25) || (this.y >= 17.4 && this.y < 19.4)) {
            if (this.x - this.speed > 13.35) {
                this.x = this.x - this.speed;
            }
        } if (this.y > 2.25 && this.y < 17.4) {
            if (this.x - this.speed > 3.35) {
                this.x = this.x - this.speed;
            }
        }
    }
}

export function mc() {
    mainPlayer = new Individual('mc');
    window.addEventListener('keydown', detectDirction);
    window.addEventListener('keyup', stopMovement);
}

function detectDirction(e) {
    if (e.key == 'w') {
        mainPlayer.up = 1;
    }
    if (e.key == 'a') {
        mainPlayer.left = 1;
    }
    if (e.key == 'd') {
        mainPlayer.right = 1;
    }
    if (e.key == 's') {
        mainPlayer.down = 1;
    }
    if ((mainPlayer.up + mainPlayer.down + mainPlayer.left + mainPlayer.right) > 1) {
        mainPlayer.speed = Math.sqrt((spd ** 2) / 2);
    }
}

function stopMovement(e) {
    if (e.key == 'w') {
        mainPlayer.up = 0;
    }
    if (e.key == 'a') {
        mainPlayer.left = 0;
    }
    if (e.key == 'd') {
        mainPlayer.right = 0;
    }
    if (e.key == 's') {
        mainPlayer.down = 0;
    }
    if ((mainPlayer.up + mainPlayer.down + mainPlayer.left + mainPlayer.right) <= 1) {
        mainPlayer.speed = spd;
    }
}