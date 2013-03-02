function Game() {
  var player = Player();
  var dealer = Dealer();
  var result = Winner(player, dealer);

  this.testing = function(test) {
    return test;
  };

  console.log(
    "Your hand:\n" +
    player.printHand() + "\n" +
    "Your score: " + player.score() + "\n" +
    "Dealer's score: " + dealer.score() + "\n"
    + result + "\n"
  );
}
