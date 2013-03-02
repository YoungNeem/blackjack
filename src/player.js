function Player() {
  var playerHand = new Hand();
  var choiceToHit =
  confirm(
    "Your hand:\n" +
    playerHand.printHand() + "\n" +
    "Your score: " + playerHand.score() + "\n"
    + "Hit?"
  );

  while(choiceToHit) {
    playerHand.hit();
    choiceToHit =
    confirm(
      "Your hand:\n" +
      playerHand.printHand() + "\n" +
      "Your score: " + playerHand.score() + "\n"
      + "Hit?"
    );
  }

  return playerHand;
}
