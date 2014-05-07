/**
 * @author krelix
 * Object representing a player.
 */
define(function(){
  'use strict';
    
  function Player(game){
    console.log('initializing player');
    // Sprite initialization
    var playa = this.player = game.add.sprite(32, game.world.height - 150, 'dude');
    
    // Physics settings
    game.physics.arcade.enable(playa);
    playa.body.bounce.y = 0.2;
    playa.body.gravity.y = 300;
    playa.body.collideWorldBounds = true;
    
    // Player animations
    playa.animations.add('left', [0, 1, 2, 3], 10, true);
    playa.animations.add('right', [5, 6, 7, 8], 10, true);

    // Keep a reference to the game
    this.game = game;
  };
  
  Player.prototype = {
    constructor: Player,
    update: function(){
      console.log('Updating player.');
    }
  }

  return Player;
});