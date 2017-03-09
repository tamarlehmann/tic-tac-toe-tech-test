$(document).ready(function() {
    var player1 = new Player();
    var player2 = new Player();

  $("#submit").click(function(e){
      player1.setName($("#player_1_name").val());
      player2.setName($("#player_2_name").val());
      e.preventDefault();
      showNames();
    });

    function showNames(){
      $("#playerNames").append(player1._name + " vs " + player2._name);
    }

});
