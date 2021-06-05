class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene");
    }
    
    preload() {


    }

    
    
    create() {
        this.add.bitmapText(2*textSpacer, 3*textSpacer, 'gem', 'Press Left Arrow to move left.', 18).setOrigin(0,0).setTint(0x32a860);
        this.add.bitmapText(2*textSpacer, 5*textSpacer, 'gem', 'Press Right Arrow to move right.', 18).setOrigin(0,0).setTint(0x32a860);
        this.add.bitmapText(2*textSpacer, 7*textSpacer, 'gem', 'Press Shift Key to attack.', 18).setOrigin(0,0).setTint(0x32a860);
        this.add.bitmapText(2*textSpacer, 9*textSpacer, 'gem', 'Press Space Bar to jump.', 18).setOrigin(0,0).setTint(0x32a860);
        this.add.bitmapText(15*textSpacer, 12*textSpacer,'gem','Press Right Arrow to start the game.',10).setOrigin(0.5).setTint(0xa83232);
        this.add.bitmapText(4*textSpacer, 12*textSpacer,'gem','Press Left Arrow to go back.',10).setOrigin(0.5).setTint(0xa83232);
        cursors = this.input.keyboard.createCursorKeys();  


    }

    update(){

        if (Phaser.Input.Keyboard.JustDown(cursors.right)) {
            this.scene.start('map1Scene');
        }

        if (Phaser.Input.Keyboard.JustDown(cursors.left)) {
            this.scene.start('titleScene');
        }
        
    }
}