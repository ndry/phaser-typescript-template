﻿import {Boot} from "./gameStates/boot";
import {Preloader} from "./gameStates/preloader";
import {MainMenu} from "./gameStates/mainMenu";
import {Level01} from "./gameStates/level01";



export class GameEngine extends Phaser.Game {

    constructor() {
        super(1024, 800, Phaser.AUTO, 'content', null);

        this.state.add('Boot', Boot, false);
        this.state.add('Preloader', Preloader, false);
        this.state.add('MainMenu', MainMenu, false);
        this.state.add('Level01', Level01, false);

        this.state.start('Boot');

        
    }
}

const game = new GameEngine();
