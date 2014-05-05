/**
 * Created by brizarda on 29/04/14.
 * Main Javascript file containing the
 * game initialization.
 */

require.config({
    paths: {
        'pixi': 'lib/pixi/pixi',
        'phaser': 'lib/phaser/phaser-no-libs'
    },
    shim: {
        'pixi' : {
            exports : 'PIXI'
        },
        'phaser' : {
            exports : 'Phaser'
        }
    }
});

require(['pixi', 'phaser', 'game'], function(PIXI, Phaser, Game){
    // Clear automatic margins
    document.body.style.margin = 0;

    //var height = window.innerHeight || document.documentElement.clientHeight;
    //var width = window.innerWidth || document.documentElement.clientWidth;
    var width,
        height;

    window.myGame = new Game(width, height);
    myGame.start();
});
