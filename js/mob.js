import { width, height, g_width, g_height, topLeft, block, x_tiles, y_tiles, ctx } from "./index.js"
import { mainPlayer } from "./character.js"
export var mob = [], md1;
var mobImages = [];


export function importMobImages() {
    md1 = new Image();
    md1.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/mob.png?raw=true';

    mobImages[0] = [md1];
}

class Mob {
    constructor() {
        this.x = 13.5;
        this.y = 6.5;
        this.spd = 0.03;
        this.img = mobImages[0][0];
        this.pathX = [];
        this.pathY = [];
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
                    let rand = this.spd * xdir;
                    this.pathX = [rand, rand, rand];
                    this.pathY = [0, 0, 0];
                    return;
                } else {
                    let rand = this.spd * ydir;
                    this.pathY = [rand, rand, rand];
                    this.pathX = [0, 0, 0];
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
            if (rand <= (1 / 3)) {
                let counter = 0;
                let rand = this.spd * ydir;
                this.pathX = [];
                this.pathY = [];
                while (y > 0 && counter < 33) {
                    this.pathY.push(rand);
                    this.pathX.push(0);
                    y -= this.spd;
                    counter++;
                }
                return;
            } if (rand <= (2 / 3)) {
                let counter = 0;
                let rand = this.spd * xdir;
                this.pathX = [];
                this.pathY = [];
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

    // processPath() {
    //     let xdir = 1;
    //     if (this.x - mainPlayer.x > 1) xdir = -1;
    //     let x = Math.abs(this.x - mainPlayer.x);
    //     let ydir = 1;
    //     if (this.y - mainPlayer.y > 1) ydir = -1;
    //     let y = Math.abs(this.y - mainPlayer.y);
    //     if (x <= 1 && y <= 1) {
    //         return;
    //     }
    //     if (x <= 1 || y <= 1) {
    //         if (x > 1) {
    //             let dir;
    //             if (xdir == 1) { dir = 'r'; } else { dir = 'l'; }
    //             while (x > 1) {
    //                 this.path.push(dir);
    //                 x -= this.spd;
    //             }
    //             return;
    //         }
    //         if (y > 1) {
    //             let dir;
    //             if (ydir == 1) { dir = 'd'; } else { dir = 'u'; }
    //             while (y > 1) {
    //                 this.path.push(dir);
    //                 y -= this.spd;
    //             }
    //             return;
    //         }
    //     }
    //     while (x > 2 && y > 2) { 
    //         let rand = Math.random();
    //     }
    //     let xy = x - y;
    // }

    characterDistance() {
        return Math.sqrt((this.x - mainPlayer.x) ** 2 + (this.y - mainPlayer.y) ** 2);
    }

    updatePosition() {
        if (this.characterDistance() >= 1) {
            if (this.pathX.length == 0) {
                this.processpath();
            }

            let xMovement = this.pathX.pop();
            let yMovement = this.pathY.pop();

            this.x += xMovement;
            this.y += yMovement;

            // let a = Math.abs(this.x - mainPlayer.x);
            // let b = Math.abs(this.y - mainPlayer.y);
            // console.log(a, b);

            // if (a > 1 && b <= 1) {
            //     this.x -= this.spd * (this.x - mainPlayer.x) / a;
            // } else if (a <= 1 && b > 1) {
            //     this.y -= this.spd * (this.y - mainPlayer.y) / b;
            // } else {
            //     let c = Math.random();
            //     if (c > 0.5) {
            //         this.x -= this.spd * (this.x - mainPlayer.x) / a;
            //     } else {
            //         this.y -= this.spd * (this.y - mainPlayer.y) / b;
            //     }
            // }
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


