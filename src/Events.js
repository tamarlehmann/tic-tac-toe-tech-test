$(document).ready(function() {
    var player1 = new Player();
    var player2 = new Player();
    $(".PlayerCounters").hide();

  $("#submit").click(function(e){
      player1.setName($("#player_1_name").val());
      player2.setName($("#player_2_name").val());
      e.preventDefault();
      $(".selectPlayer").hide();
      $(".PlayerCounters").show();
      showNames();
    });

    function showNames(){
      $("#playerNames").append(player1._name + " vs " + player2._name);
      $("#counterInstructions").append(player1._name + ", please choose your counter: ");
    }

  $( ".btn" ).click(function(player) {
      if (player1._counter === null) {
        player = player1;
      } else {
        player = player2;
      }
      var counter = this.id;
      player.chooseCounter(counter);
      hideChosenCounter();
      $("#counterInstructions").text(player2._name + ", please choose your counter: ");
      if (player1._counter && player2._counter !== null) $(".PlayerCounters").hide();
    });

    function hideChosenCounter(){
      if (player1._counter === "X") {
        $("#X").hide();
      } else {
        $("#O").hide();
      }
    }

});
