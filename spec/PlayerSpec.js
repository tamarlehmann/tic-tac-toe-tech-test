describe("Players", function(){

  beforeEach(function(){
    player1 = new Player("Player 1");
    player2 = new Player("Player 2");
  });

  describe("Player Attributes", function(){
    it("Each player has a name attribute", function(){
      expect(player1._name).toEqual("Player 1");
      expect(player2._name).toEqual("Player 2");
    });

    it("Each player can choose a counter attribute", function(){
      player1.chooseCounter("X");
      player2.chooseCounter("O");
      expect(player1._counter).toEqual("X");
      expect(player2._counter).toEqual("O");
    });

  });

});
