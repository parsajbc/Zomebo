import { topLeft, block, ctx } from "./index.js"
import { mainPlayer } from "./character.js"



export function pistolBulet(player) {

    if (player.guncounter < 15) return;

    // bulet stream will be in the form of ax + by + c = 0
    var vert;
    var horz;
    var a;
    var b;
    var c;
    var guntipx;
    var guntipy;

    switch (player.dir) {
        case 0:
            guntipx = topLeft[0] + (player.x - 0.35) * block;
            guntipy = topLeft[1] + (player.y - 0.7) * block;
            a = 1;
            b = 0;
            c = -1 * guntipx;
            vert = 1;
            horz = 0;
            break;
        case 1:
            guntipx = topLeft[0] + (player.x + 0.17) * block;
            guntipy = topLeft[1] + (player.y + 0.3) * block;
            a = 1;
            b = 0;
            c = -1 * guntipx;
            vert = -1;
            horz = 0;
            break;
        case 2:
            guntipx = topLeft[0] + (player.x - 1) * block;
            guntipy = topLeft[1] + (player.y - 0.16) * block;
            a = 0;
            b = 1;
            c = -1 * guntipy;
            vert = 0;
            horz = -1;
            break;
        case 3:
            guntipx = topLeft[0] + (player.x + 0.7) * block;
            guntipy = topLeft[1] + (player.y - 0.1) * block;
            a = 0;
            b = 1;
            c = -1 * guntipy;
            vert = 0;
            horz = 1;
            break;
        case 4:
            guntipx = topLeft[0] + (player.x + 0.43) * block;
            guntipy = topLeft[1] + (player.y - 0.43) * block;
            a = 1;
            b = 1;
            c = -1 * (guntipx + guntipy);
            vert = 1;
            horz = 1;
            break;
        case 5:
            guntipx = topLeft[0] + (player.x - 0.73) * block;
            guntipy = topLeft[1] + (player.y - 0.5) * block;
            a = 1;
            b = -1;
            c = -1 * (guntipx - guntipy);
            vert = 1;
            horz = -1;
            break;
        case 6:
            guntipx = topLeft[0] + (player.x + 0.6) * block;
            guntipy = topLeft[1] + (player.y + 0.17) * block;
            a = 1;
            b = - 1;
            c = -1 * (-1 * guntipy + guntipx);
            vert = -1;
            horz = 1;
            break;
        case 7:
            guntipx = topLeft[0] + (player.x - 0.33) * block;
            guntipy = topLeft[1] + (player.y + 0.17) * block;
            a = 1;
            b = 1;
            c = -1 * (guntipx + guntipy);
            vert = -1;
            horz = -1;
            break;
    }


    // accuracy can change over time
    let r = Math.random();
    let r2 = Math.random();
    if (r2 < 0.5) r = r * (-1);
    r = r * block / 2;
    c += r;

    let x, y;
    [x, y] = buletContactPoint(vert, horz, a, b, c, guntipx, guntipy);

    ctx.beginPath();
    ctx.moveTo(guntipx, guntipy);
    ctx.lineTo(x, y);
    ctx.arc(x, y, block / 5, 0, 2 * Math.PI);
    ctx.strokeStyle = 'red';
    ctx.stroke();
    player.shooting = 0;
    player.guncounter = 0;
}

export function rayGunBulet() {

}

function pointTopoint(x1, y1, x2, y2) {
    return (Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2));
}

function buletContactPoint(vert, horz, a, b, c, guntipx, guntipy) {
    let x;
    let y;

    if (vert == 1) {
        y = topLeft[1] + 2 * block;
        x = (-1 * b * y - c);
        if (horz != 0) {
            let x1;
            let y1;
            if (horz == -1) {
                x1 = topLeft[0] + 3 * block;
                y1 = (a * x1 + c);
            } else if (horz == 1) {
                x1 = topLeft[0] + 25 * block;
                y1 = (-1 * a * x1 - c);
            }
            if (pointTopoint(x1, y1, guntipx, guntipy) < pointTopoint(x, y, guntipx, guntipy)) {
                x = x1;
                y = y1;
            }
        }
        return [x, y];
    } else if (vert == -1) {
        y = topLeft[1] + 18 * block;
        x = (-1 * b * y - c);
        if (horz != 0) {
            let x1;
            let y1;
            if (horz == -1) {
                x1 = topLeft[0] + 3 * block;
                y1 = (-1 * a * x1 - c);
            } else if (horz == 1) {
                x1 = topLeft[0] + 25 * block;
                y1 = (a * x1 + c);
            }
            if (pointTopoint(x1, y1, guntipx, guntipy) < pointTopoint(x, y, guntipx, guntipy)) {
                x = x1;
                y = y1;
            }
        }
        return [x, y];
    } else {
        if (horz == -1) {
            x = topLeft[0] + 3 * block;
            y = (-1 * a * x - c);
            return [x, y];
        } else {
            x = topLeft[0] + 25 * block;
            y = (-1 * a * x - c);
            return [x, y];
        }
    }
}