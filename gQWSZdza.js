/**
 * Generated from the Phaser Sandbox
 *
 * //phaser.io/sandbox/gQWSZdza
 *
 * This source requires Phaser 2.6.2
 */

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

function preload() {

}

function create() {
    game.stage.backgroundColor = '#454645';

    game.input.addPointer();
    game.input.addPointer();
    game.input.addPointer();
    game.input.addPointer();
}

function update() {

}

function render() {
    //  Just renders out the pointer data when you touch the canvas
    game.debug.pointer(game.input.mousePointer);
    game.debug.pointer(game.input.pointer1);
    game.debug.pointer(game.input.pointer2);
    game.debug.pointer(game.input.pointer3);
    game.debug.pointer(game.input.pointer4);
    game.debug.pointer(game.input.pointer5);
    game.debug.pointer(game.input.pointer6);
}
