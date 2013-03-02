function Dealer() {
  var dealerHand = new Hand();

  while(dealerHand.score() < 17) {
    dealerHand.hit();
  }

  return dealerHand;
}
