/**
 * @author brizarda
 * Class representign a Phaser Game.
 */
define(['pixi', 'phaser'], function(PIXI, Phaser){
  'use strict';

  function Game(width, height){
    this.width = width || 800;
    this.height = height || 600;
  }

  Game.prototype = {
    /** To build a new Game object **/
    constructor: Game,
    start: function() {
      console.log('starting a new game');
      this.game = new Phaser.Game(this.width, this.height, Phaser.CANVAS, '', {
        preload: this.preload,
        create: this.create
      });
    },
    preload: function() {
      console.log('preloading');
      this.game.load.image('sky', '/assets/sky.png');
      this.game.load.image('ground', '/assets/platform.png');
      this.game.load.image('star', '/assets/star.png');
      this.game.load.spritesheet('dude', '/assets/dude.png', 32, 48);
    },
    create: function() {
      //  We're going to be using physics, so enable the Arcade Physics system
      this.game.physics.startSystem(Phaser.Physics.ARCADE);

      //  A simple background for our game
      this.game.add.sprite(0, 0, 'sky');

      //  The platforms group contains the ground and the 2 ledges we can jump on
      this.platforms = this.game.add.group();

      //  We will enable physics for any object that is created in this group
      this.platforms.enableBody = true;

      // Here we create the ground.
      var ground = this.platforms.create(0, this.game.world.height - 64, 'ground');

      //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
      ground.scale.setTo(2, 2);

      //  This stops it from falling away when you jump on it
      ground.body.immovable = true;

      //  Now let's create two ledges
      var ledge = this.platforms.create(400, 400, 'ground');

      ledge.body.immovable = true;

      ledge = this.platforms.create(-150, 250, 'ground');
      ledge.body.immovable = true;

    }
  };

  return Game;
});