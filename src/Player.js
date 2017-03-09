"use strict";

function Player(name){
  this._name = name;
  this._counter = null;
}

Player.prototype.chooseCounter = function(counter){
  this._counter = counter;
};
