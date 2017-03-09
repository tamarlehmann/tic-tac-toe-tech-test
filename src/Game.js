"use strict";

function Game(player1, player2){
  this._players = [player1, player2];
  this._currentPlayer = this._players[0];
}

Game.prototype.Player1 = function(){
  return this._players[0];
};

Game.prototype.Player2 = function(){
  return this._players[1];
};

Game.prototype.switchPlayer = function(){
  if (this._currentPlayer === this._players[0]) {
    this._currentPlayer = this._players[1]; } else {
      this._currentPlayer = this._players[0];
    }
};
