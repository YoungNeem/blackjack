function Hand() {
  var cards = [Deal(), Deal()];

  this.cardsInHand = function() {
    return cards.length;
  };

  this.hit = function() {
    cards.push(Deal());
  };

  this.score = function() {
    var score = 0;
    var aces = 0;
    
    for(i = 0, len = cards.length; i < len; i++) {
      score += cards[i].cardValue();
      if(cards[i].cardValue() === 11) {
        aces += 1;
      }
    }

    while(score > 21 && aces > 0) {
      score -= 10;
      aces -= 1;
    }

    return score;
  };

  this.printHand = function() {
    var cardDescription = '';

    for(i = 0, len = cards.length; i < len; i++) {
      cardDescription += cards[i].faceCard() + " of " + cards[i].suitName() + "\n";
    }

    return cardDescription;
  };
}
