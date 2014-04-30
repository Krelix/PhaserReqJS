/**
 * @author brizarda
 * Class representign a Phaser Game.
 */
define(['pixi', 'phaser'], function(PIXI, Phaser){
  'use strict';

  function Game(){
    console.log('creating a new game.');
  }

  Game.prototype = {
    /** To build a new Game object **/
    constructor: Game,
    start: function() {
      console.log('starting a new game');
      this.game = new Phaser.Game(800, 600, Phaser.CANVAS, '', {
        preload: this.preload,
        create: this.create
      });
    },
    preload: function() {
      console.log('preloading');
    },
    create: function() {
      this.game.add.text(20, 20, 'Hello, PHASER SET TO KILL', {font: '12pt Calibri', fill: 'white'});
    }
  }

  return Game;
});