/**
 * Created by brizarda on 29/04/14.
 * JavaScript file to test the loading of the different
 * Javascript libraries and their compatibillity.
 */

require.config({
    paths: {
        'pixi': '/js/lib/pixi/pixi',
        'phaser': '/js/lib/phaser/phaser-no-libs',
        'game': '/js/game'
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
    console.log('Loaded all');
});
