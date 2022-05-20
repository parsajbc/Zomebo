import { width, height, g_width, g_height, topLeft, block, x_tiles, y_tiles, ctx } from "./index.js"
import { mainPlayer } from "./character.js"
export var mob = [], md1;
var md1, md2, mu1, mu2, ml1, ml2, mr1, mr2, mul1, mul2, mdl1, mdl2, mdr1, mdr2, mur1, mur2, mobImages = [];


export function importMobImages() {
    md1 = new Image();
    md1.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/mob-down-1.png?raw=true';
    md2 = new Image();
    md2.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/mob-down-2.png?raw=true';
    mu1 = new Image();
    mu1.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/mob-up-1.PNG?raw=true';
    mu2 = new Image();
    mu2.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/mob-up-2.PNG?raw=true';
    ml1 = new Image();
    ml1.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/mob-left-1.png?raw=true';
    ml2 = new Image();
    ml2.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/mob-left-2.png?raw=true';
    mr1 = new Image();
    mr1.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/mob-right-1.PNG?raw=true';
    mr2 = new Image();
    mr2.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/mob-right-2.PNG?raw=true';
    mur1 = new Image();
    mur1.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/mob-upright-1.png?raw=true';
    mur2 = new Image();
    mur2.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/mob-upright-2.png?raw=true';
    mdr1 = new Image();
    mdr1.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/mob-downright-1.PNG?raw=true';
    mdr2 = new Image();
    mdr2.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/mob-downright-2.PNG?raw=true';
    mul1 = new Image();
    mul1.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/mob-upleft-1.PNG?raw=true';
    mul2 = new Image();
    mul2.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/mob-upleft-2.PNG?raw=true';
    mdl1 = new Image();
    mdl1.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/mob-downleft-1.png?raw=true';
    mdl2 = new Image();
    mdl2.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/mob-downleft-2.png?raw=true';

    mobImages[0] = [mu1, mu2];
    mobImages[1] = [md1, md2];
    mobImages[2] = [ml1, ml2];
    mobImages[3] = [mr1, mr2];
    mobImages[4] = [mur1, mur2];
    mobImages[5] = [mul1, mul2];
    mobImages[6] = [mdr1, mdr2];
    mobImages[7] = [mdl1, mdl2];
}

class Mob {
    constructor(x, y) {
        this.counter = 0;
        this.x = x;
        this.y = y;
        this.spd = 0.02;
        this.img = mobImages[0][0];
        this.pathX = [];
        this.pathY = [];
        this.dir = 0;
    }

    processpath() {
        let xdir = 1;
        if (this.x - mainPlayer.x > 1) xdir = -1;
        let x = Math.abs(this.x - mainPlayer.x);
        let ydir = 1;
        if (this.y - mainPlayer.y > 1) ydir = -1;
        let y = Math.abs(this.y - mainPlayer.y);
        if (x <= 1 && y <= 1) {
            if (this.characterDistance() <= 1) return;
            else {
                if (x >= y) {
                    let favX = Math.sqrt(1 - y ** 2);
                    let steps = (Math.floor(Math.abs(favX - x) / this.spd)) + 1;
                    let rand = this.spd * xdir;
                    if (xdir < 0) this.dir = 2;
                    else this.dir = 3;
                    while (steps != 0) {
                        this.pathX.push(rand);
                        this.pathY.push(0);
                        steps--;
                    }
                    return;
                } else {
                    let favY = Math.sqrt(1 - x ** 2);
                    let steps = (Math.floor(Math.abs(favY - y) / this.spd)) + 1;
                    let rand = this.spd * ydir;
                    if (ydir < 0) this.dir = 0;
                    else this.dir = 1;
                    while (steps != 0) {
                        this.pathY.push(rand);
                        this.pathX.push(0);
                        steps--;
                    }
                    return;
                }
            }
        }
        if (x <= 1 || y <= 1) {
            if (x > 1) {
                let counter = 0;
                let rand = this.spd * xdir;
                this.pathX = [];
                this.pathY = [];
                if (xdir < 0) this.dir = 2;
                else this.dir = 3;
                while (x > 0 && counter < 33) {
                    this.pathX.push(rand);
                    this.pathY.push(0);
                    x -= this.spd;
                    counter++;
                }
                return;
            }
            if (y > 1) {
                let counter = 0;
                let rand = this.spd * ydir;
                this.pathX = [];
                this.pathY = [];
                if (ydir < 0) this.dir = 0;
                else this.dir = 1;
                while (y > 0 && counter < 33) {
                    this.pathY.push(rand);
                    this.pathX.push(0);
                    y -= this.spd;
                    counter++;
                }
                return;
            }
        } else {
            let rand = Math.random();
            if (rand <= (1 / 6)) {
                let counter = 0;
                let rand = this.spd * ydir;
                this.pathX = [];
                this.pathY = [];
                if (ydir < 0) this.dir = 0;
                else this.dir = 1;
                while (y > 0 && counter < 33) {
                    this.pathY.push(rand);
                    this.pathX.push(0);
                    y -= this.spd;
                    counter++;
                }
                return;
            } if (rand <= (2 / 6)) {
                let counter = 0;
                let rand = this.spd * xdir;
                this.pathX = [];
                this.pathY = [];
                if (xdir < 0) this.dir = 2;
                else this.dir = 3;
                while (x > 0 && counter < 33) {
                    this.pathX.push(rand);
                    this.pathY.push(0);
                    x -= this.spd;
                    counter++;
                }
                return;
            } else {
                let counter = 0;
                let rand = Math.sqrt((this.spd ** 2) / 2);
                let randX = rand * xdir;
                let randY = rand * ydir;
                this.pathX = [];
                this.pathY = [];
                if (xdir < 0 && ydir < 0) this.dir = 5;
                else if (xdir < 0 && ydir > 0) this.dir = 7;
                else if (xdir > 0 && ydir > 0) this.dir = 6;
                else this.dir = 4;
                while (x > 0 && counter < 33) {
                    this.pathX.push(randX);
                    this.pathY.push(randY);
                    x -= this.spd;
                    counter++;
                }
                return;
            }
        }
    }

    characterDistance() {
        return Math.sqrt((this.x - mainPlayer.x) ** 2 + (this.y - mainPlayer.y) ** 2);
    }

    mobDistance(mob) {
        return Math.sqrt((this.x - mob.x) ** 2 + (this.y - mob.y) ** 2);
    }

    pushback(px, py) {
        this.x += px;
        this.y += py;
    }

    pushbackMobs() {
        for (let i = 0; i < mob.length; i++) {
            let m = mob[i];
            let mobdist = this.mobDistance(m);
            if (mobdist < 1 && m != this) {
                let pushDistance = (1 - mobdist) * 0.3;
                let angle = Math.atan((this.y - m.y) / (this.x - m.x));
                let y_move = Math.sin(angle) * pushDistance;
                let x_move = Math.cos(angle) * pushDistance;
                if (this.x < m.x) {
                    m.pushback(x_move, y_move);
                    this.x -= x_move;
                    this.adjustX();
                    this.y -= y_move;
                    this.adjustY();
                } else {
                    m.pushback(-x_move, -y_move);
                    this.x += x_move;
                    this.adjustX();
                    this.y += y_move;
                    this.adjustY();
                }
            }
        }
    }

    updatePosition() {
        if (this.characterDistance() >= 1.03) {
            if (this.pathX.length == 0) {
                this.processpath();
            }

            let xMovement = this.pathX.pop();
            let yMovement = this.pathY.pop();

            this.x += xMovement;
            this.adjustX();

            this.y += yMovement;
            this.adjustY();

            let picCounter = (Math.floor(this.counter / 7)) % 2;
            this.img = mobImages[this.dir][picCounter];
            this.counter++;
            if (this.counter > 70000) this.counter = 0;
        } else {
            let pushDistance = (1 - this.characterDistance()) * 0.2;
            let angle = Math.atan((this.y - mainPlayer.y) / (this.x - mainPlayer.x));
            let y_move = Math.sin(angle) * pushDistance;
            let x_move = Math.cos(angle) * pushDistance;
            if (this.x < mainPlayer.x) {
                mainPlayer.pushback(x_move, y_move);
                this.x -= x_move;
                this.adjustX();
                this.y -= y_move;
                this.adjustY();
            } else {
                mainPlayer.pushback(-x_move, -y_move);
                this.x += x_move;
                this.adjustX();
                this.y += y_move;
                this.adjustY();
            }
        }

        this.pushbackMobs();
    }

    adjustX() {
        if ((this.y < 2.25 && this.y >= 0.25) || (this.y > 17.4 && this.y <= 19.4)) {
            if (this.x > 14.65) {
                this.x = 14.65;
            } if (this.x < 13.35) {
                this.x = 13.35;
            }
        } if (this.y >= 2.25 && this.y <= 17.4) {
            if (this.x > 24.65) {
                this.x = 24.65;
            } if (this.x < 3.35) {
                this.x = 3.35;
            }
        }
    }

    adjustY() {
        if ((this.x > 3.35 && this.x < 13.35) || (this.x > 14.65 && this.x <= 24.65)) {
            if (this.y < 2.25) {
                this.y = 2.25;
            } if (this.y > 17.4) {
                this.y = 17.4;
            }
        } if (this.x >= 13.35 && this.x <= 14.65) {
            if (this.y < 0.25) {
                this.y = 0.25;
            } if (this.y > 19.4) {
                this.y = 19.4;
            }
        }
    }

    draw() {
        let x = topLeft[0] + this.x * block;
        let y = topLeft[1] + this.y * block;

        ctx.drawImage(this.img, x - 0.5 * block, y - 0.65 * block, 0.7 * block, 1.3 * block);
    }
}

export function createMobs() {
    mob.push(new Mob(13.5, 6.5));
    mob.push(new Mob(14.5, 6.5));
}

export function drawMobs() {
    for (let i = 0; i < mob.length; i++) {
        mob[i].updatePosition();
        mob[i].draw();
    }
}


