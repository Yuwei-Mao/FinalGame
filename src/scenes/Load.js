class Load extends Phaser.Scene {
    constructor() {
        super('loadScene');
    }

    preload() {
        //load sheets
        this.load.path = './assets/';
        this.load.spritesheet('hero', 'hero-sheet.png', {
            frameWidth: 32,
            frameHeight: 32,
        });
        this.load.spritesheet('pink_eyeball', 'Pink-Eyeball.png', {
            frameWidth: 32,
            frameHeight: 32,
        })
        this.load.spritesheet('fire', 'fire.png', {
            frameWidth: 32,
            frameHeight: 32,
        })
        this.load.spritesheet('green_slime','Green-Slime.png',{
            frameWidth: 32,
            frameHeight: 32,
        })

        this.load.spritesheet('door', 'door.png', {
            frameWidth: 32,
            frameHeight: 32,
        })

        this.load.spritesheet('trap', 'trap.png', {
            frameWidth: 32,
            frameHeight: 32,
        })

        this.load.bitmapFont('gem', 'gem.png', 'gem.xml');
        this.load.image('bg','bg.png');
        this.load.image('tower','tower.png');
        this.load.image('hider','hider.png');
        this.load.image('bullet','bullet.png');
        this.load.image('fire_bullet','fire_bullet.png');
        this.load.image('green_bullet','green_bullet.png');
        this.load.image('heart','heart.png');
        this.load.image('key','key.png');
        this.load.image('medicine','medicine.png');
        this.load.image('range','range.png');
        this.load.image('shield','shield.png');


        //load audio
        this.load.audio('attack','attack.wav');
        this.load.audio('shift','shift.wav');
    }

    create() {
        //
        this.anims.create({
            key: 'eyeballMove',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('pink_eyeball', { start: 0, end: 3 }),
        });

        this.anims.create({
            key: 'fireMove',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('fire', { start: 0, end: 3 }),
        });
        this.anims.create({
            key: 'greenslimeMove',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('green_slime', { start: 0, end: 3 }),
        });
        // go to Title scene
        this.scene.start('titleScene');
    }
}