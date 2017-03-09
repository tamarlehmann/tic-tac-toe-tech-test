"use strict";

function Player(){
  this._name = null;
  this._counter = null;
}

Player.prototype.chooseCounter = function(counter){
  this._counter = counter;
};

Player.prototype.setName = function (name) {
  this._name = name;
};
