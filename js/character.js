import { topLeft, block, ctx } from "./index.js"
import { pistolBulet, rayGunBulet } from "./ammo.js"

var spd = 0.07;
export var mainPlayer;
var gd1, gd2, gu1, gu2, gl1, gl2, gr1, gr2, gul1, gul2, gdl1, gdl2, gdr1, gdr2, gur1, gur2, imgArray = [];
var nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];


export function importCharacterImages() {
    gd1 = new Image();
    gd1.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/guy-down-1.png?raw=true';
    gd2 = new Image();
    gd2.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/guy-down-2.png?raw=true';
    gu1 = new Image();
    gu1.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/guy-up-1.png?raw=true';
    gu2 = new Image();
    gu2.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/guy-up-2.png?raw=true';
    gl1 = new Image();
    gl1.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/guy-left-1.png?raw=true';
    gl2 = new Image();
    gl2.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/guy-left-2.png?raw=true';
    gr1 = new Image();
    gr1.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/guy-right-1.png?raw=true';
    gr2 = new Image();
    gr2.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/guy-right-2.png?raw=true';
    gur1 = new Image();
    gur1.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/guy-upright-1.png?raw=true';
    gur2 = new Image();
    gur2.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/guy-upright-2.png?raw=true';
    gdr1 = new Image();
    gdr1.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/guy-downright-1.png?raw=true';
    gdr2 = new Image();
    gdr2.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/guy-downright-2.png?raw=true';
    gul1 = new Image();
    gul1.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/guy-upleft-1.png?raw=true';
    gul2 = new Image();
    gul2.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/guy-upleft-2.png?raw=true';
    gdl1 = new Image();
    gdl1.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/guy-downleft-1.png?raw=true';
    gdl2 = new Image();
    gdl2.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/guy-downleft-2.png?raw=true';

    imgArray[0] = [gu1, gu2];
    imgArray[1] = [gd1, gd2];
    imgArray[2] = [gl1, gl2];
    imgArray[3] = [gr1, gr2];
    imgArray[4] = [gur1, gur2];
    imgArray[5] = [gul1, gul2];
    imgArray[6] = [gdr1, gdr2];
    imgArray[7] = [gdl1, gdl2];
}

class MainCharacter {
    constructor() {
        this.shooting = 0;
        this.gun = 0;
        this.guncounter = 10;
        this.level = 2;
        this.n = 0;
        this.dir = 0;
        this.up = 0;
        this.down = 0;
        this.left = 0;
        this.right = 0;
        this.speed = spd;
        this.counter = 0;
        this.x = 13.5;
        this.y = 10.5;
        this.base_image = imgArray[0][0];
    }


    draw() {
        let x = topLeft[0] + this.x * block;
        let y = topLeft[1] + this.y * block;

        ctx.drawImage(this.base_image, x - 0.38 * block, y - 0.7 * block, 0.7 * block, 1.3 * block);
        // ctx.drawImage(this.base_image, x - 0.1 * block, y - 0.1 * block, 0.2 * block, 0.2 * block);

        // ctx.beginPath();
        // ctx.moveTo(x - 0.4 * block, y + 0.5 * block);
        // ctx.lineTo(x + 0.4 * block, y + 0.5 * block);
        // ctx.lineTo(x, y - 0.5 * block);
        // ctx.closePath();
        // ctx.strokeStyle = 'red';
        // ctx.stroke();
    }

    pushback(px, py) {
        this.x += px;
        this.y += py;
    }

    updatePosition() {
        if (this.up) {
            this.dir = 0;
            this.moveup();
        } if (this.down) {
            if (!(this.up)) {
                this.dir = 1;
            }
            this.movedown();
        } if (this.right) {
            if (this.up) {
                this.dir = 4;
            } else if (this.down) {
                this.dir = 6;
            } else { this.dir = 3 }
            this.moveright();
        } if (this.left) {
            if (this.right) { } else if (this.up) {
                this.dir = 5;
            } else if (this.down) {
                this.dir = 7;
            } else { this.dir = 2; }
            this.moveleft();
        }

        if ((this.down + this.up + this.left + this.right) > 0) {
            this.counter++;
        } if (this.counter > 50000) {
            this.counter = 0;
        }

        let picCounter = (Math.floor(this.counter / 7) % 2);
        this.base_image = imgArray[this.dir][picCounter];
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

    shoot() {
        if (this.shooting == 0) return;



        if (this.gun == 0) pistolBulet(this);
        if (this.gun == 1) rayGunBulet(this);
    }
}

export function mc() {
    mainPlayer = new MainCharacter();
    window.addEventListener('keydown', detectKeyDown);
    window.addEventListener('keyup', detectKeyUp);
    window.addEventListener('keypress', detectKeyPress);
}

function detectKeyDown(e) {
    if (e.key == 'w' || e.key == 'W') {
        mainPlayer.up = 1;
    } if (e.key == 'a' || e.key == 'A') {
        mainPlayer.left = 1;
    } if (e.key == 'd' || e.key == 'D') {
        mainPlayer.right = 1;
    } if (e.key == 's' || e.key == 'S') {
        mainPlayer.down = 1;
    } if ((mainPlayer.up + mainPlayer.down + mainPlayer.left + mainPlayer.right) > 1) {
        mainPlayer.speed = Math.sqrt((spd ** 2) / 2);
    } if (nums.includes(e.key)) {
        let num = parseInt(e.key);
        if (num == 0) num = 10;
        if (num <= mainPlayer.level) { mainPlayer.gun = num - 1 }
    }
}

function detectKeyPress(e) {
    if (e.key == ' ') {
        mainPlayer.shooting = 1;
    }
}

function detectKeyUp(e) {
    if (e.key == 'w' || e.key == 'W') {
        mainPlayer.up = 0;
    } if (e.key == 'a' || e.key == 'A') {
        mainPlayer.left = 0;
    } if (e.key == 'd' || e.key == 'D') {
        mainPlayer.right = 0;
    } if (e.key == 's' || e.key == 'S') {
        mainPlayer.down = 0;
    } if ((mainPlayer.up + mainPlayer.down + mainPlayer.left + mainPlayer.right) <= 1) {
        mainPlayer.speed = spd;
    } if (e.key == ' ') {
        mainPlayer.shooting = 0;
    }
}

export function characterInstant() {
    mainPlayer.shoot();
    mainPlayer.updatePosition();
    mainPlayer.draw();
    mainPlayer.guncounter++;
}