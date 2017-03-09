describe("Grid", function(){

  beforeEach(function(){
      grid = new Grid();
  });

  describe("Grid: Board", function(){
    it("Has 3 rows of squares", function(){
      expect(grid._squares.length).toEqual(3);
    });

    it("Each row has 3 columns of squares", function(){
      expect(grid._squares[0].length).toEqual(3);
    });
  });
});
