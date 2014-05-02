## Simple Phaser Template with RequireJS

This is based on the Phaser RequireJS template. However, I wanted to separate phaser and its libs. It requires to track a little bit more what happens, add the PIXI dependency but it gives (in my opinion) more control on what you want in your game.

The goal is to have a nice template that has as much as possible set up to use later as a basis for any projects.

### Getting started

Use `npm install` to install the grunt dependencies (`grunt`, `grunt-contrib-connect` and `grunt-contrib-qunit`). Make sure you have installed grunt-cli globally (`npm install -g grunt-cli`).

Start the server using `grunt connect:server` which will start a server on port 9000 with keepalive, meaning it'll run until you kill the execution (CTRL+C in the command line). You can configure the port in the Gruntfile.js by changing the `port` valueof the `server` object, under `connect`.

### Roadmap

- Include the physics librairies for Phaser.
- Merge PIXI and Phaser (can't use Phaser otherwise... Was mostly to figure out RequireJS)
- Add a basic testing framework and folder structure
- Add automated testing for any issues between different versions of PixiJS, Phaser and it's libraries

