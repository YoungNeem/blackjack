function Winner(playerHand, dealerHand) {
  var player = playerHand.score();
  var dealer = dealerHand.score();

  if(player > 21) {
    if(dealer > 21) {
      return 'You tied.';
    }
    else {
      return 'You lose.';
    }
  }
  else if(dealer > 21) {
    return 'You win!';
  }
  else if(player > dealer) {
    return 'You win!';
  }
  else if(player === dealer) {
    return 'You tied.';
  }
  else {
    return 'You lose.';
  }
}
