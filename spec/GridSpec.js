describe("Grid", function(){

  beforeEach(function(){
      grid = new Grid();
  });

  describe("Grid: Board", function(){
    it("Should be a defined object", function(){
       expect(grid instanceof(Grid)).toBe(true);
    });

    it("Has 9 squares in total", function(){
      expect(grid._squares.length).toEqual(9);
    });

    it("Each square is undefined to begin with", function(){
      for(var i = 0; i < 10; i++)
        { expect(grid._squares[i]).toEqual(undefined); }
    });

  });
});
