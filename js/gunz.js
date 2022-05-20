import { topLeft, block, ctx } from "./index.js"
import { mainPlayer } from "./character.js"
var pd, pu, pr, pl, pur, pul, pdr, pdl, ru, rd, rl, rr, rul, rur, rdl, rdr, gunz = [];
var before = [0, 4, 3, 5];
var after = [1, 2, 6, 7];



export function importGun() {
    pd = new Image();
    pd.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/guns/pistol-down.png?raw=true';
    pu = new Image();
    pu.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/guns/pistol-up.png?raw=true';
    pl = new Image();
    pl.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/guns/pistol-left.png?raw=true';
    pr = new Image();
    pr.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/guns/pistol-right.png?raw=true';
    pur = new Image();
    pur.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/guns/pistol-upright.png?raw=true';
    pul = new Image();
    pul.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/guns/pistol-upleft.png?raw=true';
    pdr = new Image();
    pdr.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/guns/pistol-downright.png?raw=true';
    pdl = new Image();
    pdl.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/guns/pistol-downleft.png?raw=true';

    rd = new Image();
    rd.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/guns/ray-down.png?raw=true';
    ru = new Image();
    ru.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/guns/ray-up.png?raw=true';
    rl = new Image();
    rl.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/guns/ray-left.png?raw=true';
    rr = new Image();
    rr.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/guns/ray-right.png?raw=true';
    rur = new Image();
    rur.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/guns/ray-upright.png?raw=true';
    rul = new Image();
    rul.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/guns/ray-upleft.png?raw=true';
    rdr = new Image();
    rdr.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/guns/ray-downright.png?raw=true';
    rdl = new Image();
    rdl.src = 'https://github.com/parsajbc/Zomebo/blob/main/img/guns/ray-downleft.png?raw=true';


    gunz.push([pu, pd, pl, pr, pur, pul, pdr, pdl]);
    gunz.push([ru, rd, rl, rr, rur, rul, rdr, rdl]);
}

export function drawGun(t) {
    let dir = mainPlayer.dir;
    if (t == 0 && before.includes(dir)) {

        let x = topLeft[0] + mainPlayer.x * block;
        let y = topLeft[1] + mainPlayer.y * block;

        switch (dir) {
            case 0:
                ctx.drawImage(gunz[mainPlayer.gun][dir], x - 1.24 * block, y - 2.5 * block, 1.9 * block, 2.4 * block);
                break;
            case 4:
                ctx.drawImage(gunz[mainPlayer.gun][dir], x - 0.2 * block, y - 2.1 * block, 1.7 * block, 2.1 * block);
                break;
            case 3:
                ctx.drawImage(gunz[mainPlayer.gun][dir], x - 0 * block, y - 0.9 * block, 1.5 * block, 2 * block);
                break;
            case 5:
                ctx.drawImage(gunz[mainPlayer.gun][dir], x - 1.7 * block, y - 2.1 * block, 1.5 * block, 2 * block);
                break;
        }
    }

    if (t == 1 && after.includes(dir)) {

        let x = topLeft[0] + mainPlayer.x * block;
        let y = topLeft[1] + mainPlayer.y * block;


        switch (dir) {
            case 1:
                ctx.drawImage(gunz[mainPlayer.gun][dir], x - 0.8 * block, y - 0.1 * block, 1.9 * block, 2.4 * block);
                break;
            case 2:
                ctx.drawImage(gunz[mainPlayer.gun][dir], x - 1.8 * block, y - 0.95 * block, 1.5 * block, 2 * block);
                break;
            case 6:
                ctx.drawImage(gunz[mainPlayer.gun][dir], x - 0 * block, y - 0.9 * block, 1.5 * block, 2 * block);
                break;
            case 7:
                ctx.drawImage(gunz[mainPlayer.gun][dir], x - 1.25 * block, y - 0.85 * block, 1.5 * block, 2 * block);
                break;
        }
    }
}