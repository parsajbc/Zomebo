import { topLeft, block, ctx } from "./index.js"
import { mainPlayer } from "./character.js"
var pd, pu, pr, pl, pur, pul, pdr, pdl, ru, rd, rl, rr, rul, rur, rdl, rdr, gunz = [];



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


    gunz.push([pd, pu, pr, pl, pur, pul, pdr, pdl]);
    gunz.push([rd, ru, rr, rl, rur, rul, rdr, rdl]);
}

export function drawGun(t) {
    // if (mainPlayer.dir == )
}