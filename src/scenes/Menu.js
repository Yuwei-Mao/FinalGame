class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene");
    }
    
    preload() {


    }

    
    
    create() {

        
        // this.add.bitmapText(2*textSpacer, 3*textSpacer, 'gem', 'Press Left Arrow to move left.', 18).setOrigin(0,0).setTint(0x32a860);
        // this.add.bitmapText(2*textSpacer, 5*textSpacer, 'gem', 'Press Right Arrow to move right.', 18).setOrigin(0,0).setTint(0x32a860);
        // this.add.bitmapText(2*textSpacer, 7*textSpacer, 'gem', 'Press Shift Key to attack.', 18).setOrigin(0,0).setTint(0x32a860);
        // this.add.bitmapText(2*textSpacer, 9*textSpacer, 'gem', 'Press Space Bar to jump.', 18).setOrigin(0,0).setTint(0x32a860);
        // this.add.bitmapText(15*textSpacer, 12*textSpacer,'gem','Press D to start the game.',10).setOrigin(0.5).setTint(0xa83232);
        // this.add.bitmapText(4*textSpacer, 12*textSpacer,'gem','Press A Arrow to go back.',10).setOrigin(0.5).setTint(0xa83232);
        // cursors = this.input.keyboard.createCursorKeys();  

        this.t1 = this.add.bitmapText(2*textSpacer, 3*textSpacer, 'gem', 'Start', 18).setOrigin(0,0).setTint(0x8a988e);
        this.t2 = this.add.bitmapText(2*textSpacer, 5*textSpacer, 'gem', 'Option', 18).setOrigin(0,0).setTint(0x8a988e);
        this.t3 = this.add.bitmapText(2*textSpacer, 7*textSpacer, 'gem', 'Tutorial', 18).setOrigin(0,0).setTint(0x8a988e);
        this.t4 = this.add.bitmapText(2*textSpacer, 9*textSpacer, 'gem', 'Credits', 18).setOrigin(0,0).setTint(0x8a988e);
        cursors = this.input.keyboard.createCursorKeys();
        this.option1 = 0;
        this.keyW = this.input.keyboard.addKey('W'); 
        this.keyS = this.input.keyboard.addKey('S');
        this.keyEnter = this.input.keyboard.addKey('Enter');


    }

    update(){

        if (Phaser.Input.Keyboard.JustDown(cursors.up) || Phaser.Input.Keyboard.JustDown(this.keyW)) {
            if(this.option1>1){
                this.option1 -=1;
            }
        }else if (Phaser.Input.Keyboard.JustDown(cursors.down) ||Phaser.Input.Keyboard.JustDown(this.keyS)) {
            if(this.option1<4){
                this.option1 +=1;
            }
        }else if(Phaser.Input.Keyboard.JustDown(this.keyEnter)){
            switch(this.option1){
                case 1:
                    this.rd = Math.round(Math.random()*3);
                    switch(this.rd){
                        case 0:
                            this.scene.start('map1Scene');
                            break;
                        case 1:
                            this.scene.start('map2Scene');
                            break;
                        case 2:
                            this.scene.start('map3Scene');
                            break;
                        case 3:
                            this.scene.start('map3Scene');
                            break;
                    }
                    break;
            }
        }

        switch(this.option1){
            case 1:
                this.t1.setTint(0x393733);
                this.t2.setTint(0x8a988e);
                this.t3.setTint(0x8a988e);
                this.t4.setTint(0x8a988e);
                break;
            case 2:
                this.t1.setTint(0x8a988e);
                this.t2.setTint(0x393733);
                this.t3.setTint(0x8a988e);
                this.t4.setTint(0x8a988e);
                break;
            case 3:
                this.t1.setTint(0x8a988e);
                this.t2.setTint(0x8a988e);
                this.t3.setTint(0x393733);
                this.t4.setTint(0x8a988e);
                break;
            case 4:
                this.t1.setTint(0x8a988e);
                this.t2.setTint(0x8a988e);
                this.t3.setTint(0x8a988e);
                this.t4.setTint(0x393733);
                break;    
        }


        
    }
}