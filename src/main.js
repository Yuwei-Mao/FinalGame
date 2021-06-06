const config = {
    parent: 'phaser-game', 
    type: Phaser.AUTO,     
    width: 400,
    height: 256,
    pixelArt: true,
    zoom: 2,
    physics: {
        default: "arcade"
    },
    scene: [Load, Title, Credit, Menu, Talking, Talking2, Talking3, Talking4, Map1, Map2, Map3, Map4, BossMap, Boss2Map, Gameover]
}

// define game
const game = new Phaser.Game(config);
let centerX = game.config.width / 2;
let centerY = game.config.height / 2;
let quarterX = game.config.width / 4;
let quarterY = game.config.height / 4;
let w = game.config.width;
let h = game.config.height;
const SCALE = 2;
const textSpacer = 20;
let cursors;
//let gameover = false;

//let attacking = false;

let max_hp = 5;
let hp = max_hp;
// sheid 
let sh = 0;

// range
let range = 0.15;

let level = 1;
