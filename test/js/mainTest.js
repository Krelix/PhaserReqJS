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
    // TODO: seperate in new files.
    test('PIXI should be defined', function(){
        ok(PIXI !== undefined, 'PIXI is defined.');
    });
    test('Phaser should be defined', function(){
        ok(Phaser !== undefined, 'Phaser is defined');
    });
    test('Game should be defined', function(){
        ok(Game !== undefined, 'Game is defined');
    });
    
    var myGame = new Game();
    test('myGame should be defined', function(){
        ok(myGame instanceof Game, 'myGame was not created');
    });

    myGame.start();
    asyncTest('Initialized game should create a canvas once START has been called.', function(){
        expect(1);

        setTimeout(function(){
            ok(document.getElementsByTagName('canvas').length == 1, 'There is a canvas.');
            start();
        }, 1000);
    });

    QUnit.load();
    QUnit.start();
});
