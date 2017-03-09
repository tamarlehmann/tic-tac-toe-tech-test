describe("Game", function(){

  beforeEach(function(){
      player1 = jasmine.createSpy('player');
      player2 = jasmine.createSpy('player');
      grid = jasmine.createSpy('grid');
      game = new Game(player1, player2, grid);
  });

  describe("Game: Players", function(){
    it("Has two players", function(){
      expect(game._players.length).toEqual(2);
      expect(game._players[0]).toEqual(player1);
      expect(game._players[1]).toEqual(player2);
    });

    it("Has a current player", function(){
      expect(game._currentPlayer).toEqual(player1);
    });

    it("Switches Players after each turn", function(){
      game.switchPlayer();
      expect(game._currentPlayer).toEqual(player2);
    });

  });

  describe("Game: Grid", function(){
    it("Has a playing grid", function(){
      expect(game.displayGrid()).toEqual(grid);
    });
  });

});
