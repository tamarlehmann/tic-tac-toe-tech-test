"use strict";

function Game(player1, player2){
  this._players = [player1, player2];
}

Game.prototype.Player1 = function(){
  return this._players[0];
};

Game.prototype.Player2 = function(){
  return this._players[1];
};
