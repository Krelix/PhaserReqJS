## Simple Phaser Template with RequireJS

This is based on the Phaser RequireJS template. However, I wanted to separate phaser and its libs. It requires to track a little bit more what happens, add the PIXI dependency but it gives (in my opinion) more control on what you want in your game.

### Getting started

Use `npm install` to install the grunt dependencies (`grunt` and `grunt-contrib-connect`). Make sure you have installed grunt-cli globally (`npm install -g grunt-cli`).

Start the server using `grunt connect` which will start a server on port 9000. You can configure it Gruntfile.js by changing the `port` value.

### Roadmap

- Include the physics engine for Phaser.
- Merge PIXI and Phaser (can't use Phaser otherwise... Was mostly to figure out RequireJS)

